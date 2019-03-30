import React from 'react';
// import styled from 'styled-components';
// import { PeriodColumn } from '../blocks/period';
// import { YearFragment } from './../graphql/__generated__/YearFragment';
// import { HorizontalPage } from './horizontal-page';

// const Year = styled.div``;

// const YearTitle = styled.h2`
//   color: white;
//   text-transform: uppercase;
//   font-size: 1em;
//   margin: 0 0 1em 1em;
// `;

// const YearContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

// interface YearProps {
//   year: YearFragment;
//   toggleCourse: (courseCode: string) => void;
//   selectedCourses: string[];
// }

// export const YearColumn: React.FC<YearProps> = ({
//   year: {
//     year,
//     periods,
//   },
//   toggleCourse,
//   selectedCourses,
// }) => (
//   <Year>
//     <YearTitle>Årskurs {year}</YearTitle>
//     <YearContainer>
//       {periods.map((period, index) => <PeriodColumn
//         key={index}
//         period={period}
//         toggleCourse={toggleCourse}
//         selectedCourses={selectedCourses}
//       />)}
//     </YearContainer>
//   </Year>
// );
