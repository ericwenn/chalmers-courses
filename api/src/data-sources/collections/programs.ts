import { Collection, Db } from 'mongodb';
import { Program } from '../types';

export type ProgramCollection = Collection<Program>;
export const programCollection = async (database: Db) => {
  const collection = database.collection<Program>('programs');
  return collection;
};
