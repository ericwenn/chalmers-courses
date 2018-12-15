const cheerio = require('cheerio');
const rp = require('request-promise');
const { writeFileSync } = require('fs');
const { join } = require('path');

const scrape = (programId, grade) => {
  const url = `https://student.portal.chalmers.se/sv/chalmersstudier/programinformation/Sidor/SokProgramutbudet.aspx?program_id=${programId}&grade=${grade}&conc_id=-1&parsergrp=1`;
  return rp(url)
  .then(html => {
    const $ = cheerio.load(html)
    const t = $('.table-responsive.parsed-services').eq(0);

    const programName = t.find('table').eq(1).find('tr').eq(1).find('td').eq(0).text().trim()

    const tbl = t.find('table').eq(2);
    const rows = tbl.find('tr');
    
    const current = {
      period: null,
      type: null,
    };
    const periods = {};
    const types = {};
    let courses = [];
    for (let i = 0; i < rows.length; i++) {
      const row = rows.eq(i);
      const nChildren = row.children().length;
      if (nChildren === 1) {
        const text = row.find('td').eq(0).text().trim();
        if (text.match(/läsperiod/i)) {
          current.period = text;
          periods[text] = [];
        } else if (text.match(/obligatorisk|valbar|frivillig/i)) {
          current.type = text;
          if (types[text] === undefined) {
            types[text] = [];
          }
        }
      } else if (nChildren === 10) {
        const cols = row.find('td');
        const code = cols.eq(1).text().trim();
        const points = parseFloat(cols.eq(6).text().trim().replace(',','.'))
        const course = {
          code,
          name: cols.eq(5).find('a').text().trim(),
          block: cols.eq(4).text().trim(),
          points,
          moments: [
            {
              name: cols.eq(5).text().trim(),
              points,
            }
          ],
          link: cols.eq(5).find('a').eq(0).attr('href')
        };
        courses.push(course);
        if (periods[current.period].indexOf(code) === -1) {
          periods[current.period].push(code);
        }
        if (types[current.type].indexOf(code) === -1) {
          types[current.type].push(code);
        }
      }
    }

    courses = courses.reduce((aggregated, course) => {
      if (!course.link || !course.name) {
        aggregated[aggregated.length - 1].moments.push(course.moments[0]);
        aggregated[aggregated.length - 1].points += course.points;
      } else {
        aggregated.push(course);
      }
      return aggregated;
    }, [])

    // console.log(courses);
    // console.log(periods);
    // console.log(types);


    // Populate compulsory elective
    let compulsiveElective = null;
    const courseCodeRegex = /([A-Z]{3}[0-9]{3})/g
    const chooseCoursesRegex = / ([0-9]{1,2}) {1,2}av kurserna/;
    const choosePointsRegex = / ([0-9]{1,3}.[0-9]{1,2}) hp av kurserna/;
    const extras = t.find('table').eq(3).find('td');
    for (let i = 0; i < extras.length; i++) {
      const extra = extras.eq(i);
      const text = extra.text();
      if (text.match(/obligatorisk/i) && text.match(/valbar/i)) {
        const courses = text.match(courseCodeRegex);
        const chooseNCourses = chooseCoursesRegex.exec(text);
        const chooseNPoints = choosePointsRegex.exec(text);

        if (chooseNCourses) {
          compulsiveElective = {
            type: 'courses',
            courses,
            choose: parseInt(chooseNCourses[1])
          };
        } else if (chooseNPoints) {
          compulsiveElective = {
            type: 'points',
            courses,
            choose: parseFloat(chooseNPoints[1])
          }
        } else {
          console.log(text);
        }
      }
    }


    // Populate compulsory
    let compulsive = null;
    const compulsiveRegex = /obligatorisk/i;
    for (const type of Object.keys(types)) {
      if (type.match(compulsiveRegex)) {
        compulsive = {
          type: 'compulsive',
          courses: types[type]
        }
        break;
      }
    };

    return {
      programName,
      link: url,
      courses,
      periods,
      types,
      compulsive,
      compulsiveElective
    }
  });
}


const scrapeProgram = async programId => {
  const masterRegex = /master/i;

  const program = {
    name: '',
    courses: [],
    grades: [],
    requirements: [],
  };
  

  let gradesToScrape = 3;
  for(let i = 1; i <= gradesToScrape; i++) {
    const {
      programName,
      link,
      courses,
      periods,
      types,
      compulsive,
      compulsiveElective
    } = await scrape(programId, i);
    
    if (programName.match(masterRegex)) {
      gradesToScrape = 2;
      program.type = 'master';
    } else {
      program.type = 'bachelor';
    }

    program.name = program.name || programName;
    program.courses.push(...courses);
    program.grades.push({
      grade: i,
      link,
      periods,
      types,
    });
    if (compulsive) {
      program.requirements.push(compulsive);
    }
    if (compulsiveElective) {
      program.requirements.push(compulsiveElective);
    }
  }
  return program;
}

const from = 1460; // 1460
const to = 1534; // 1543

const main = async () => {
  for(let programId = from; programId <= to; programId++) {
    const program = await scrapeProgram(programId);
    const filename = program.name.slice(0,5).toLowerCase() + '.json';
    writeFileSync(join(__dirname, 'data', filename), JSON.stringify(program));
  }
}

main();
// scrapeProgram(1521).then(console.log);
