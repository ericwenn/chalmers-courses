import { ContextualDataSource } from '../contextual-datasource';
import Courses from './courses.json';
import StudyPeriods from './reading-periods.json';
import Requirements from './requirements.json';

interface Program {
  name: string;
}

interface StudyYear {
  year: number;
}

interface StudyPeriod {
  name: string;
  courses: string[];
}

interface Course {
  institution: string;
  courseCode: string;
  block: string;
  name?: string;
  points: number;
}

interface Requirement {
  type: string;
  courses: string[];
  choose?: number;
}

export class CourseAPI extends ContextualDataSource {
  public getProgram(): Program {
    return {
      name: 'MPALG',
    };
  }

  public getStudyYears(): StudyYear[] {
    return [
      {
        year: 1,
      },
      {
        year: 2,
      },
    ];
  }

  public getStudyPeriods(year: number): StudyPeriod[] {
    return StudyPeriods.filter((period) => {
      return period.year === year;
    });
  }

  public getCourses(courses: string[]): Course[] {
    return Courses.filter((course) => {
      return courses.indexOf(course.courseCode) > -1;
    }).map((course) => ({
      name: 'some',
      code: course.courseCode,
      ...course,
    }));
  }

  public getRequirements(): Requirement[] {
    return Requirements;
  }
}
