import { Db, ObjectId } from 'mongodb';

export interface Course {
  _id: ObjectId;
  name: string;
}

export const make = async (database: Db) => {
  const collection = database.collection<Course>('courses');
  return collection;
};
