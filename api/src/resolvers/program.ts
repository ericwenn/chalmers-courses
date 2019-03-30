import { Context } from 'src/context';
import { ProgramResolvers } from '../generated/graphqlgen';

export const Program: ProgramResolvers.Type = {
  ...ProgramResolvers.defaultResolvers,
  _id: ({ _id }) => _id.toHexString(),
  grades: async ({ _id }, {}, { dataSources }: Context<any>) => {
    return dataSources.courseAPI.getGrades(_id);
  },

  requirements: async ({ _id }, {}, { dataSources }: Context) => {
    return dataSources.courseAPI.getRequirements(_id);
  },
};
