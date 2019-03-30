#!/usr/bin/env node
const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');
const mongodb = require('mongodb');

const DATA_PATH = './../student_portal_scraper/data';
const files = readdirSync(join(__dirname, DATA_PATH)).map(f => join(__dirname, DATA_PATH, f));


const insert = async(file, collections) => {
  const { 
    Programs,
    Grades,
    Periods,
    Courses,
    Requirements
  } = collections;
  const data = JSON.parse(readFileSync(file));
  
  const programId = mongodb.ObjectID();

  const courses = data.courses.map(course => ({
    _id: mongodb.ObjectID(),
    ...course,
    moments: course.moments.map(moment => ({
      ...moment,
      name: moment.name.replace(`${course.name},`, '').trim()
    })),
    block: course.block === '' ? null : course.block,
  }));

  const courseCodeIdMap = {};
  courses.forEach(course => {
    courseCodeIdMap[course.code] = course._id;
  });

  const grades = [];
  const periods = [];
  data.grades.forEach(grade => {
    const gradeId = mongodb.ObjectID();
    const gradeDoc = {
      _id: gradeId,
      programId,
      year: grade.grade,
      link: grade.link
    };
    grades.push(gradeDoc);
    periods.push(...Object.keys(grade.periods).map(periodName => ({
      _id: mongodb.ObjectID(),
      name: periodName,
      gradeId,
      courseIds: grade.periods[periodName].map(courseCode => courseCodeIdMap[courseCode])
    })))
  })


  const requirements = data.requirements.map(req => ({
    _id: mongodb.ObjectID(),
    programId,
    courseIds: req.courses.map(courseCode => courseCodeIdMap[courseCode]),
    type: req.type,
    choose: req.choose,
  }));

  const [code, name] = data.name.split(' - ');
  const program = {
    _id: programId,
    code,
    name,
    type: data.type,
    courseIds: courses.map(course => course._id),
  };

  await Programs.insertOne(program);
  await Grades.insertMany(grades);
  if (periods.length > 0) {
    await Periods.insertMany(periods);
  }
  if (courses.length > 0) {
    await Courses.insertMany(courses);
  }
  if (requirements.length > 0) {
    await Requirements.insertMany(requirements);
  }
}

const populate = async (files) => {
  const client = await mongodb.connect('mongodb://localhost:27017/ccourses', { useNewUrlParser: true });
  const db = await client.db();

  const Programs = db.collection('programs');
  const Grades = db.collection('grades');
  const Periods = db.collection('periods');
  const Courses = db.collection('courses');
  const Requirements = db.collection('requirements');
  const collections = {
    Programs,
    Grades,
    Periods,
    Courses,
    Requirements
  }
  for (let file of files) {
    await insert(file, collections);
  }
  await client.close();
}

populate(files);
