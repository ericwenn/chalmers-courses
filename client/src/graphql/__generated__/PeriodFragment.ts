/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PeriodFragment
// ====================================================

export interface PeriodFragment_courses {
  __typename: "Course";
  code: string;
  name: string;
  points: number | null;
}

export interface PeriodFragment {
  __typename: "StudyPeriod";
  name: string;
  courses: PeriodFragment_courses[];
}
