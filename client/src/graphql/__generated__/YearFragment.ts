/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: YearFragment
// ====================================================

export interface YearFragment_periods_courses {
  __typename: "Course";
  code: string;
  name: string;
  points: number;
}

export interface YearFragment_periods {
  __typename: "StudyPeriod";
  name: string;
  courses: YearFragment_periods_courses[];
}

export interface YearFragment {
  __typename: "StudyYear";
  year: number | null;
  periods: YearFragment_periods[];
}
