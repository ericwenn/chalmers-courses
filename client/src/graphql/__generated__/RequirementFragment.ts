/* tslint:disable */
// This file was automatically generated and should not be edited.

import { RequirementEnum } from "./globalTypes";

// ====================================================
// GraphQL fragment: RequirementFragment
// ====================================================

export interface RequirementFragment_CompulsoryRequirement_courses {
  __typename: "Course";
  _id: string;
  code: string;
  points: number;
}

export interface RequirementFragment_CompulsoryRequirement {
  __typename: "CompulsoryRequirement";
  _id: string;
  type: RequirementEnum;
  courses: RequirementFragment_CompulsoryRequirement_courses[];
}

export interface RequirementFragment_CourseCompulsoryElectiveRequirement_courses {
  __typename: "Course";
  _id: string;
  code: string;
  points: number;
}

export interface RequirementFragment_CourseCompulsoryElectiveRequirement {
  __typename: "CourseCompulsoryElectiveRequirement";
  _id: string;
  type: RequirementEnum;
  courses: RequirementFragment_CourseCompulsoryElectiveRequirement_courses[];
  chooseCourses: number;
}

export interface RequirementFragment_PointsCompulsoryElectiveRequirement_courses {
  __typename: "Course";
  _id: string;
  code: string;
  points: number;
}

export interface RequirementFragment_PointsCompulsoryElectiveRequirement {
  __typename: "PointsCompulsoryElectiveRequirement";
  _id: string;
  type: RequirementEnum;
  courses: RequirementFragment_PointsCompulsoryElectiveRequirement_courses[];
  choosePoints: number;
}

export type RequirementFragment = RequirementFragment_CompulsoryRequirement | RequirementFragment_CourseCompulsoryElectiveRequirement | RequirementFragment_PointsCompulsoryElectiveRequirement;
