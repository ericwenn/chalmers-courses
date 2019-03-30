import { ObjectID } from 'mongodb';

export interface Program {
  _id: ObjectID;
  code: string;
  name: string;
  type: 'bachelor' | 'master';
}

export interface Grade {
  _id: ObjectID;
  programId: ObjectID;
  year: number;
  link: string;
}

export interface Period {
  _id: ObjectID;
  name: string;
  gradeId: ObjectID;
  courseIds: ObjectID[];
}

export interface Course {
  _id: ObjectID;
  code: string;
  name: string;
  block: null | 'A' | 'B' | 'C' | 'D' | 'A+' | 'B+' | 'C+' | 'D+';
  points: number;
  link: string;
  moments: Moment[];
}

export interface Moment {
  name: string;
  points: number;
}

export interface CompulsoryRequirement {
  _id: ObjectID;
  programId: ObjectID;
  courseIds: ObjectID[];
  type: 'compulsory';
}

export interface CourseCompulsoryElectiveRequirement {
  _id: ObjectID;
  programId: ObjectID;
  courseIds: ObjectID[];
  type: 'courses';
  choose: number;
}

export interface PointsCompulsoryElectiveRequirement {
  _id: ObjectID;
  programId: ObjectID;
  courseIds: ObjectID[];
  type: 'points';
  choose: number;
}

export type Requirement =
  CompulsoryRequirement
  | CourseCompulsoryElectiveRequirement
  | PointsCompulsoryElectiveRequirement;
