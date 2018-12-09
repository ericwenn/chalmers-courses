import React from 'react';
import styled from 'styled-components';
import { PeriodFragment } from './../graphql/__generated__/PeriodFragment';
import { Course } from './course';
import { ListCard, ListCardTitle } from './list-card';

interface PeriodProps {
  period: PeriodFragment;
  toggleCourse: (courseCode: string) => void;
  selectedCourses: string[];
}

export const PeriodColumn: React.FC<PeriodProps> = ({
  period: {
    name,
    courses,
  },
  toggleCourse,
  selectedCourses,
}) => {
  return (
    <ListCard>
      <ListCardTitle>{name}</ListCardTitle>
      { courses.map((course, i) => <Course
        key={i}
        course={course}
        toggleCourse={toggleCourse}
        selectedCourses={selectedCourses}
      />)}
    </ListCard>
  );
};
