import { Context } from 'src/context';
import { CompulsoryElectiveRequirementResolvers, CompulsoryRequirementResolvers } from 'src/generated/graphqlgen';

export const Requirement = {
  __resolveType: async ({ type }: any) => {
    switch (type) {
      case 'compulsory':
        return 'CompulsoryRequirement';
      case 'compulsory-elective':
        return 'CompulsoryElectiveRequirement';
      default:
        return null;
    }
  },
};


const coursesResolver = ({ courses }: any, _: any, { dataSources }: Context) => {
  return dataSources.courseAPI.getCourses(courses);
};

export const CompulsoryRequirement: CompulsoryRequirementResolvers.Type = {
  ...CompulsoryRequirementResolvers.defaultResolvers,
  type: () => 'COMPULSORY',
  courses: coursesResolver,

};

export const CompulsoryElectiveRequirement: CompulsoryElectiveRequirementResolvers.Type = {
  ...CompulsoryElectiveRequirementResolvers.defaultResolvers,
  type: () => 'COMPULSORY_ELECTIVE',
  courses: coursesResolver,
};
