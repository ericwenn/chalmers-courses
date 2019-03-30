import { DataSource } from 'apollo-datasource';
import { ObjectID } from 'bson';
import { CourseCollection } from '../collections/courses';
import { GradeCollection } from '../collections/grades';
import { PeriodCollection } from '../collections/periods';
import { ProgramCollection } from '../collections/programs';
import { RequirementCollection } from '../collections/requirements';
import { ContextualDataSource } from '../contextual-datasource';
import { Course, Grade, Period, Program, Requirement } from '../types';

export class CourseAPI extends ContextualDataSource {
  public programs: ProgramCollection;
  public grades: GradeCollection;
  public periods: PeriodCollection;
  public courses: CourseCollection;
  public requirements: RequirementCollection;

  public getProgram(): Promise<Program> {
    return this.programs.findOne({ code: 'MPALG' });
  }

  public getGrades(programId: ObjectID): Promise<Grade[]> {
    return this.grades.find({ programId }).toArray();
  }

  public getPeriods(gradeId: ObjectID): Promise<Period[]> {
    return this.periods.find({ gradeId }).toArray();
  }

  public getCourses(courseIds: ObjectID[]): Promise<Course[]> {
    return this.courses.find({ _id: { $in: courseIds }}).toArray();
  }

  public getRequirements(programId: ObjectID): Promise<Requirement[]> {
    return this.requirements.find({ programId }).toArray();
  }
}
