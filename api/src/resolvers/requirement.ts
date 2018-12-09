import { Context } from 'src/context';

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

const typeResolver = ({ type }: { type: string }) => {
  return type.toUpperCase().replace('-', '_');
};

const coursesResolver = ({ courses }: any, _: any, { dataSources }: Context) => {
  return dataSources.courseAPI.getCourses(courses);
};

export const CompulsoryRequirement = {
  type: typeResolver,
  courses: coursesResolver,
};

export const CompulsoryElectiveRequirement = {
  type: typeResolver,
  courses: coursesResolver,
};
