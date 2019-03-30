import gql from 'graphql-tag';

const REQUIREMENT_FRAGMENT = gql`
  fragment RequirementFragment on Requirement {
    _id
    type
    courses {
      _id
      code
      points
    }
    ... on CourseCompulsoryElectiveRequirement {
      chooseCourses: choose
    }
    ... on PointsCompulsoryElectiveRequirement {
      choosePoints: choose
    }
  }
`;


export const COURSE_QUERY = gql`
query CoursesQuery {
  program {
    _id
    name
    grades {
      year
      periods {
        _id
        name
        courses {
          _id
          code
          name
          points
        }
      }
    }
    requirements {
      ...RequirementFragment
    }
  }
}
${REQUIREMENT_FRAGMENT}
`;
