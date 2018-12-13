import { Context } from 'src/context';
import { StudyYearResolvers } from 'src/generated/graphqlgen';

export const StudyYear: StudyYearResolvers.Type = {
  ...StudyYearResolvers.defaultResolvers,
  periods: async ({ year }, {}, { dataSources }) => {
    return dataSources.courseAPI.getStudyPeriods(year);
  },
};
