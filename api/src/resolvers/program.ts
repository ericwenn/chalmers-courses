import { Context } from 'src/context';

export const Program = {
  years: async (_: any, {}, { dataSources }: Context<any>) => {
    return dataSources.courseAPI.getStudyYears();
  },

  requirements: async (_: any, {}, { dataSources }: Context) => {
    return dataSources.courseAPI.getRequirements();
  },
};
