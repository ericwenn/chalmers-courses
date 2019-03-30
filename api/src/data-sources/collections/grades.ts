import { Collection, Db } from 'mongodb';
import { Grade } from '../types';

export type GradeCollection = Collection<Grade>;
export const gradeCollection = async (database: Db) => {
  const collection = database.collection<Grade>('grades');
  return collection;
};
