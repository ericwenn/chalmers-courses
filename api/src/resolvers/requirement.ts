import { Requirement as RQ } from 'src/data-sources/types';
import {
  CompulsoryRequirementResolvers,
  CourseCompulsoryElectiveRequirementResolvers,
  PointsCompulsoryElectiveRequirementResolvers,
} from '../generated/graphqlgen';

export const Requirement = {
  __resolveType: async ({ type }: RQ) => {
    switch (type) {
      case 'compulsory':
        return 'CompulsoryRequirement';
      case 'courses':
        return 'CourseCompulsoryElectiveRequirement';
      case 'points':
        return 'PointsCompulsoryElectiveRequirement';
      default:
        return null;
    }
  },
};

export const CompulsoryRequirement: CompulsoryRequirementResolvers.Type = {
  ...CompulsoryRequirementResolvers.defaultResolvers,
  _id: ({ _id }) => _id.toHexString(),
  courses: ({ courseIds }, _, { dataSources }) => dataSources.courseAPI.getCourses(courseIds),
};
export const CourseCompulsoryElectiveRequirement: CourseCompulsoryElectiveRequirementResolvers.Type = {
  ...CourseCompulsoryElectiveRequirementResolvers.defaultResolvers,
  _id: ({ _id }) => _id.toHexString(),
  courses: ({ courseIds }, _, { dataSources }) => dataSources.courseAPI.getCourses(courseIds),
};
export const PointsCompulsoryElectiveRequirement: PointsCompulsoryElectiveRequirementResolvers.Type = {
  ...PointsCompulsoryElectiveRequirementResolvers.defaultResolvers,
  _id: ({ _id }) => _id.toHexString(),
  courses: ({ courseIds }, _, { dataSources }) => dataSources.courseAPI.getCourses(courseIds),
};

