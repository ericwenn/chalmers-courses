import { ContextualDataSource } from '../contextual-datasource';
import { Course, Program, Requirement, StudyPeriod, StudyYear } from '../types';
import Courses from './courses.json';
import StudyPeriods from './reading-periods.json';
import Requirements from './requirements.json';

export class CourseAPI extends ContextualDataSource {
  public getProgram(): Program {
    return {
      name: 'MPALG',
    };
  }

  public getStudyYears(): StudyYear[] {
    return [
      {
        name: 'Läsperiod 1',
        year: 1,
      },
      {
        name: 'Läsperiod 2',
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
      return courses.indexOf(course.code) > -1;
    }).map((course): Course => ({
      ...course,
      block: 'A',
    }));
  }

  public getRequirements(): Requirement[] {
    return Requirements;
  }
}
