import { CourseResolvers } from '../generated/graphqlgen';

export const Course: CourseResolvers.Type = {
  ...CourseResolvers.defaultResolvers,
  _id: ({ _id }) => _id.toHexString(),
  block: (course) => {
    switch (course.block) {
      case 'A+':
        return 'A_PLUS';
      case 'B+':
        return 'B_PLUS';
      case 'C+':
        return 'C_PLUS';
      case 'D+':
        return 'D_PLUS';
      default:
        return null;
    }
  },
};
