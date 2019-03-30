/* tslint:disable */
// This file was automatically generated and should not be edited.

import { RequirementEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: CoursesQuery
// ====================================================

export interface CoursesQuery_program_grades_periods_courses {
  __typename: "Course";
  _id: string;
  code: string;
  name: string;
  points: number;
}

export interface CoursesQuery_program_grades_periods {
  __typename: "Period";
  _id: string;
  name: string;
  courses: CoursesQuery_program_grades_periods_courses[];
}

export interface CoursesQuery_program_grades {
  __typename: "Grade";
  year: number | null;
  periods: CoursesQuery_program_grades_periods[];
}

export interface CoursesQuery_program_requirements_CompulsoryRequirement_courses {
  __typename: "Course";
  _id: string;
  code: string;
  points: number;
}

export interface CoursesQuery_program_requirements_CompulsoryRequirement {
  __typename: "CompulsoryRequirement";
  _id: string;
  type: RequirementEnum;
  courses: CoursesQuery_program_requirements_CompulsoryRequirement_courses[];
}

export interface CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement_courses {
  __typename: "Course";
  _id: string;
  code: string;
  points: number;
}

export interface CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement {
  __typename: "CourseCompulsoryElectiveRequirement";
  _id: string;
  type: RequirementEnum;
  courses: CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement_courses[];
  chooseCourses: number;
}

export interface CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement_courses {
  __typename: "Course";
  _id: string;
  code: string;
  points: number;
}

export interface CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement {
  __typename: "PointsCompulsoryElectiveRequirement";
  _id: string;
  type: RequirementEnum;
  courses: CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement_courses[];
  choosePoints: number;
}

export type CoursesQuery_program_requirements = CoursesQuery_program_requirements_CompulsoryRequirement | CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement | CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement;

export interface CoursesQuery_program {
  __typename: "Program";
  _id: string;
  name: string;
  grades: CoursesQuery_program_grades[];
  requirements: CoursesQuery_program_requirements[];
}

export interface CoursesQuery {
  program: CoursesQuery_program;
}
