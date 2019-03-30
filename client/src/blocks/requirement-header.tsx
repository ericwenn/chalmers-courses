import React from 'react';
import styled from 'styled-components';
import {
  CoursesQuery_program_requirements,
  CoursesQuery_program_requirements_CompulsoryRequirement,
  CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement,
  CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement,
} from '../graphql/__generated__/CoursesQuery';

interface RequirementProps {
  requirement: CoursesQuery_program_requirements;
  selectedCourses: string[];
}


function isCompulsory(
  requirement: (
    CoursesQuery_program_requirements_CompulsoryRequirement
    | CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement
    | CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement
  ),
): requirement is CoursesQuery_program_requirements_CompulsoryRequirement {
  return requirement.__typename === 'CompulsoryRequirement';
}

function isCourseReq(
  requirement: (
    CoursesQuery_program_requirements_CompulsoryRequirement
    | CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement
    | CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement
  ),
): requirement is CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement {
  return requirement.__typename === 'CourseCompulsoryElectiveRequirement';
}

function isPointsReq(
  requirement: (
    CoursesQuery_program_requirements_CompulsoryRequirement
    | CoursesQuery_program_requirements_CourseCompulsoryElectiveRequirement
    | CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement
  ),
): requirement is CoursesQuery_program_requirements_PointsCompulsoryElectiveRequirement {
  return requirement.__typename === 'PointsCompulsoryElectiveRequirement';
}

export const RequirementHeader: React.FC<RequirementProps> = ({
  requirement,
  selectedCourses,
}) => {
  let fulfilled = true;
  const fulfilledCourses = requirement.courses.filter(({ code }) => selectedCourses.indexOf(code) > -1);
  if (isCompulsory(requirement)) {
    fulfilled = fulfilledCourses.length === requirement.courses.length;
  }
  if (isCourseReq(requirement)) {
    fulfilled = fulfilledCourses.length >= requirement.chooseCourses;
  }
  if (isPointsReq(requirement)) {
    fulfilled = fulfilledCourses.reduce((agg, { points }) => agg + points, 0) >= requirement.choosePoints;
  }

  const {
    type,
    courses,
  } = requirement;
  return (
    <div>
      { type }
      { fulfilled && 'Fulfilled'}
    </div>
  );
};
