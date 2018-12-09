import gql from 'graphql-tag';

const COURSE_FRAGMENT = gql`
fragment CourseFragment on Course {
  code
  name
  points
}
`;

const SLIM_COURSE_FRAGMENT = gql`
fragment SlimCourseFragment on Course {
  code
}
`;

const PERIOD_FRAGMENT = gql`
fragment PeriodFragment on StudyPeriod {
  name
  courses {
    ...CourseFragment
  }
}
${COURSE_FRAGMENT}
`;

const YEAR_FRAGMENT = gql`
fragment YearFragment on StudyYear {
  year
  periods {
    ...PeriodFragment
  }
}
${PERIOD_FRAGMENT}
`;

const REQUIREMENT_FRAGMENT = gql`
fragment RequirementFragment on Requirement {
  __typename
  type
  ... on CompulsoryRequirement {
    courses {
      ...SlimCourseFragment
    }
  }
  ... on CompulsoryElectiveRequirement {
    courses {
      ...SlimCourseFragment
    },
    choose
  }
}
${SLIM_COURSE_FRAGMENT}
`;

export const COURSE_QUERY = gql`
query CoursesQuery {
  program {
    name
    requirements {
      ...RequirementFragment
    }
    years {
      ...YearFragment
    }
  }
}
${REQUIREMENT_FRAGMENT}
${YEAR_FRAGMENT}
`;
