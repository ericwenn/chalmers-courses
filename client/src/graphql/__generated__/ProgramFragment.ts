/* tslint:disable */
// This file was automatically generated and should not be edited.

import { RequirementEnum } from "./globalTypes";

// ====================================================
// GraphQL fragment: ProgramFragment
// ====================================================

export interface ProgramFragment_requirements_CompulsoryRequirement_courses {
  __typename: "Course";
  code: string;
}

export interface ProgramFragment_requirements_CompulsoryRequirement {
  __typename: "CompulsoryRequirement";
  type: RequirementEnum;
  courses: ProgramFragment_requirements_CompulsoryRequirement_courses[];
}

export interface ProgramFragment_requirements_CompulsoryElectiveRequirement_courses {
  __typename: "Course";
  code: string;
}

export interface ProgramFragment_requirements_CompulsoryElectiveRequirement {
  __typename: "CompulsoryElectiveRequirement";
  type: RequirementEnum;
  courses: ProgramFragment_requirements_CompulsoryElectiveRequirement_courses[];
  choose: number;
}

export type ProgramFragment_requirements = ProgramFragment_requirements_CompulsoryRequirement | ProgramFragment_requirements_CompulsoryElectiveRequirement;

export interface ProgramFragment_years_periods_courses {
  __typename: "Course";
  code: string;
  name: string;
  points: number | null;
}

export interface ProgramFragment_years_periods {
  __typename: "StudyPeriod";
  name: string;
  courses: ProgramFragment_years_periods_courses[];
}

export interface ProgramFragment_years {
  __typename: "StudyYear";
  year: string | null;
  periods: ProgramFragment_years_periods[];
}

export interface ProgramFragment {
  __typename: "Program";
  name: string;
  requirements: ProgramFragment_requirements[];
  years: ProgramFragment_years[];
}
