import React from 'react';
import styled from 'styled-components';

// interface CourseProps {
//   course: CourseFragment | SlimCourseFragment;
//   toggleCourse: (courseCode: string) => void;
//   selectedCourses: string[];
// }
// interface CourseBlockProps {
//   selected: boolean;
//   slim?: boolean;
// }
// const CourseBlock = styled.div<CourseBlockProps>`
// border-radius: 6px;
// padding: .5em;
// margin-bottom: .5em;
// cursor:pointer;
// border: 2px ${({ selected }) => selected ? '#4CAF50' : 'transparent' } solid;
// order: ${({ selected }) => selected ? '0' : '1'}

// background-color: white;
// &:hover {
//   background-color: #efefef;
// }

// ${({ selected }) => selected && `
//   background-color: #66BB6A;
//   &:hover {
//     background-color: #4CAF50;
//   }
// `}
// `;

// const Title = styled.h3`
//   font-size: 1em;
//   margin: 0;
//   word-wrap: auto;
//   white-space: normal;
//   font-weight: normal;
//   margin-bottom: .5em;
// `;
// const Subtitle = styled.span`
//   font-size: .8em;
//   font-weight: bold;
//   color: #555;
// `;

// function notSlim(course: SlimCourseFragment | CourseFragment): course is CourseFragment {
//   return (course as CourseFragment).name !== undefined;
// }

// export const Course: React.FC<CourseProps> = ({
//   course,
//   toggleCourse,
//   selectedCourses,
// }) => {
//   const selected = selectedCourses.indexOf(course.code) > -1;

//   if (notSlim(course)) {
//     const { code, name, points } = course;
//     return (
//       <CourseBlock
//         onClick={() => toggleCourse(code)}
//         selected={selected}
//       >
//         <Title>{name}</Title>
//         <Subtitle>{code} - {points} poäng</Subtitle>
//       </CourseBlock>
//     );
//   }
//   return (
//     <CourseBlock
//       slim
//       onClick={() => toggleCourse(course.code)}
//       selected={selected}
//     >
//       <Subtitle>{course.code}</Subtitle>
//     </CourseBlock>
//   );
// };
