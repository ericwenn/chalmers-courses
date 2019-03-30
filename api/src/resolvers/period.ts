import { PeriodResolvers } from '../generated/graphqlgen';

export const Period: PeriodResolvers.Type = {
  ...PeriodResolvers.defaultResolvers,
  _id: ({ _id }) => _id.toHexString(),
  courses: async ({ courseIds } , {}, { dataSources }) => {
    return dataSources.courseAPI.getCourses(courseIds);
  },
};
