/* tslint:disable */
// This file was automatically generated and should not be edited.

import { RequirementEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: CoursesQuery
// ====================================================

export interface CoursesQuery_program_requirements_CompulsoryRequirement_courses {
  __typename: "Course";
  code: string;
}

export interface CoursesQuery_program_requirements_CompulsoryRequirement {
  __typename: "CompulsoryRequirement";
  type: RequirementEnum;
  courses: CoursesQuery_program_requirements_CompulsoryRequirement_courses[];
}

export interface CoursesQuery_program_requirements_CompulsoryElectiveRequirement_courses {
  __typename: "Course";
  code: string;
}

export interface CoursesQuery_program_requirements_CompulsoryElectiveRequirement {
  __typename: "CompulsoryElectiveRequirement";
  type: RequirementEnum;
  courses: CoursesQuery_program_requirements_CompulsoryElectiveRequirement_courses[];
  choose: number;
}

export type CoursesQuery_program_requirements = CoursesQuery_program_requirements_CompulsoryRequirement | CoursesQuery_program_requirements_CompulsoryElectiveRequirement;

export interface CoursesQuery_program_years_periods_courses {
  __typename: "Course";
  code: string;
  name: string;
  points: number;
}

export interface CoursesQuery_program_years_periods {
  __typename: "StudyPeriod";
  name: string;
  courses: CoursesQuery_program_years_periods_courses[];
}

export interface CoursesQuery_program_years {
  __typename: "StudyYear";
  year: number | null;
  periods: CoursesQuery_program_years_periods[];
}

export interface CoursesQuery_program {
  __typename: "Program";
  name: string;
  requirements: CoursesQuery_program_requirements[];
  years: CoursesQuery_program_years[];
}

export interface CoursesQuery {
  program: CoursesQuery_program;
}
