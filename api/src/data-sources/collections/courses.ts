import { Collection, Db } from 'mongodb';
import { Course } from '../types';

export type CourseCollection = Collection<Course>;
export const courseCollection = async (database: Db) => {
  const collection = database.collection<Course>('courses');
  return collection;
};
