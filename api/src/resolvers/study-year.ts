import { Context } from '../context';
import { StudyYearResolvers } from '../generated/graphqlgen';

export const StudyYear: StudyYearResolvers.Type = {
  ...StudyYearResolvers.defaultResolvers,
  periods: async ({ year }, {}, { dataSources }) => {
    return dataSources.courseAPI.getStudyPeriods(year);
  },
};
