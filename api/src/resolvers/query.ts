import { Context } from 'src/context';

export const Query = {
  // courses: async (_: any, {}, { dataSources }: Context) => {
  //   const courses = await dataSources.courseAPI.getAllCourses();
  //   return courses;
  // },
  program: async (_: any, {}, { dataSources }: Context<any>) => {
    return dataSources.courseAPI.getProgram();
  },
};
