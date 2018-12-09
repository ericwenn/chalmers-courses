/* tslint:disable */
// This file was automatically generated and should not be edited.

import { RequirementEnum } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: RequirementFragment
// ====================================================

export interface RequirementFragment_CompulsoryRequirement_courses {
  __typename: "Course";
  code: string;
}

export interface RequirementFragment_CompulsoryRequirement {
  __typename: "CompulsoryRequirement";
  type: RequirementEnum;
  courses: RequirementFragment_CompulsoryRequirement_courses[];
}

export interface RequirementFragment_CompulsoryElectiveRequirement_courses {
  __typename: "Course";
  code: string;
}

export interface RequirementFragment_CompulsoryElectiveRequirement {
  __typename: "CompulsoryElectiveRequirement";
  type: RequirementEnum;
  courses: RequirementFragment_CompulsoryElectiveRequirement_courses[];
  choose: number;
}

export type RequirementFragment = RequirementFragment_CompulsoryRequirement | RequirementFragment_CompulsoryElectiveRequirement;
