import { Context } from 'src/context';

export const StudyYear = {
  periods: async ({ year }: any, {}, { dataSources }: Context<any>) => {
    return dataSources.courseAPI.getStudyPeriods(year);
  },
};
