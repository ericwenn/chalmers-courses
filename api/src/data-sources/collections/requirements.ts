import { Collection, Db } from 'mongodb';
import { Requirement } from '../types';

export type RequirementCollection = Collection<Requirement>;
export const requirementCollection = async (database: Db) => {
  const collection = database.collection<Requirement>('requirements');
  return collection;
};
