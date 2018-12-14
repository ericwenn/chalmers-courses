import { Context } from '../context';
import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  // courses: async (_: any, {}, { dataSources }: Context) => {
  //   const courses = await dataSources.courseAPI.getAllCourses();
  //   return courses;
  // },
  programs: () => [],
  program: async (_: any, {}, { dataSources }: Context<any>) => {
    return dataSources.courseAPI.getProgram();
  },
};
