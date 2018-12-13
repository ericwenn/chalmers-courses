import { Context } from 'src/context';
import { ProgramResolvers } from 'src/generated/graphqlgen';

export const Program: ProgramResolvers.Type = {
  ...ProgramResolvers.defaultResolvers,
  years: async (_, {}, { dataSources }: Context<any>) => {
    return dataSources.courseAPI.getStudyYears();
  },

  requirements: async (_: any, {}, { dataSources }: Context) => {
    return dataSources.courseAPI.getRequirements();
  },
};
