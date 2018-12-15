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
  await Periods.insertMany(periods);
  await Courses.insertMany(courses);
  await Requirements.insertMany(requirements);
}

const populate = async (files) => {
  const client = await mongodb.connect('mongodb://localhost:27017/ccourses', { useNewUrlParser: true });
  const db = await client.db();

  const collections = {
    Programs: db.collection('programs'),
    Grades: db.collection('grades'),
    Periods: db.collection('periods'),
    Courses: db.collection('courses'),
    Requirements: db.collection('requirements'),
  };
  
  await insert(files[10], collections);
  // for (let file of files) {
  //   insert(file, collections);
  // }
  await client.close();
}

populate(files);
