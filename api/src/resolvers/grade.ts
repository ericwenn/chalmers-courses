import { Context } from '../context';
import { GradeResolvers } from '../generated/graphqlgen';

export const Grade: GradeResolvers.Type = {
  ...GradeResolvers.defaultResolvers,
  _id: ({ _id }) => _id.toHexString(),
  periods: async ({ _id }, {}, { dataSources }) => {
    return dataSources.courseAPI.getPeriods(_id);
  },
};
