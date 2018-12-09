import React from 'react';
import styled from 'styled-components';
import { RequirementFragment } from './../graphql/__generated__/RequirementFragment';
import { Course } from './course';
import { ListCard, ListCardTitle } from './list-card';

interface CourseProps {
  requirement: RequirementFragment;
  toggleCourse: (courseCode: string) => void;
  selectedCourses: string[];
}


export const Requirement: React.FC<CourseProps> = ({
  requirement: {
    type,
    courses,
  },
  toggleCourse,
  selectedCourses,
}) => (
  <ListCard>
    <ListCardTitle>{ type }</ListCardTitle>
    { courses.map((course) => <Course
      course={course}
      toggleCourse={toggleCourse}
      selectedCourses={selectedCourses}
    />)}
  </ListCard>
);
