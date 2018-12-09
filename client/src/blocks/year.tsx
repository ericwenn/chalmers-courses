import React from 'react';
import styled from 'styled-components';
import { PeriodColumn } from '../blocks/period';
import { YearFragment } from './../graphql/__generated__/YearFragment';
import { HorizontalPage } from './horizontal-page';

const Year = styled.div`
  display:inline-block;
  vertical-align: top;
`;

interface YearProps {
  year: YearFragment;
  toggleCourse: (courseCode: string) => void;
  selectedCourses: string[];
}

export const YearColumn: React.FC<YearProps> = ({
  year: {
    year,
    periods,
  },
  toggleCourse,
  selectedCourses,
}) => (
  <HorizontalPage>
    <Year>
      <h2>År {year}</h2>
      {periods.map((period, index) => <PeriodColumn
        key={index}
        period={period}
        toggleCourse={toggleCourse}
        selectedCourses={selectedCourses}
      />)}
    </Year>
  </HorizontalPage>
);
