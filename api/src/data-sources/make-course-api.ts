import { DataSource } from 'apollo-datasource';
import { Db } from 'mongodb';
import { CourseAPI } from './mocked/course-api';

export const makeCourseAPI = async (database: Db): Promise<() => CourseAPI> => {
  return () => {
    const api = new CourseAPI();
    return api;
  };
};
