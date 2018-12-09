import { Context } from 'src/context';

export const StudyPeriod = {
  courses: async ({ courses }: any, {}, { dataSources }: Context<any>) => {
    return dataSources.courseAPI.getCourses(courses);
  },
};
