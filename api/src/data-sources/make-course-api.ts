import { Db } from 'mongodb';
import { courseCollection, CourseCollection } from './collections/courses';
import { gradeCollection, GradeCollection } from './collections/grades';
import { periodCollection, PeriodCollection } from './collections/periods';
import { programCollection, ProgramCollection } from './collections/programs';
import { RequirementCollection, requirementCollection } from './collections/requirements';
import { CourseAPI } from './course-api';

export const makeCourseAPI = async (database: Db): Promise<() => CourseAPI> => {
  const programs: ProgramCollection = await programCollection(database);
  const grades: GradeCollection = await gradeCollection(database);
  const periods: PeriodCollection = await periodCollection(database);
  const courses: CourseCollection = await courseCollection(database);
  const requirements: RequirementCollection = await requirementCollection(database);

  return () => {
    const api = new CourseAPI();
    api.programs = programs;
    api.grades = grades;
    api.periods = periods;
    api.courses = courses;
    api.requirements = requirements;
    return api;
  };
};
