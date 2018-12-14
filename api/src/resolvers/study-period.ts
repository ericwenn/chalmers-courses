import { Context } from '../context';
import { StudyPeriodResolvers } from '../generated/graphqlgen';

export const StudyPeriod: StudyPeriodResolvers.Type = {
  ...StudyPeriodResolvers.defaultResolvers,
  courses: async ({ courses }: any, {}, { dataSources }: Context<any>) => {
    return dataSources.courseAPI.getCourses(courses);
  },
};
