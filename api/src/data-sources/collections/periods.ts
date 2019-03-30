import { Collection, Db } from 'mongodb';
import { Period } from '../types';

export type PeriodCollection = Collection<Period>;
export const periodCollection = async (database: Db) => {
  const collection = database.collection<Period>('periods');
  return collection;
};
