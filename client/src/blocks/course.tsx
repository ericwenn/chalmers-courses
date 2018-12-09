import React from 'react';
import styled from 'styled-components';
import { SlimCourseFragment } from '../graphql/__generated__/SlimCourseFragment';
import { CourseFragment } from './../graphql/__generated__/CourseFragment';


interface CourseProps {
  course: CourseFragment | SlimCourseFragment;
  toggleCourse: (courseCode: string) => void;
  selectedCourses: string[];
}
interface CourseBlockProps {
  selected: boolean;
  slim?: boolean;
}
const CourseBlock = styled.div<CourseBlockProps>`
border-radius: 6px;
padding: .5em;
margin-bottom: .5em;
width: 14em;
cursor:pointer;
background-color: ${({ selected }) => selected ? '#a9e3a1 !important' : 'white' };

${({ slim }) => slim && `
  display: inline-block;
  padding: .2em;
  vertical-align: top;
  width: auto;
`}
&:hover {
  background-color: #efefef;
}
`;

const Title = styled.h3`
  font-size: 1em;
  margin: 0;
  word-wrap: auto;
  white-space: normal;
  font-weight: normal;
  margin-bottom: .5em;
`;
const Subtitle = styled.span`
  font-size: .8em;
  font-weight: bold;
  color: #555;
`;

function notSlim(course: SlimCourseFragment | CourseFragment): course is CourseFragment {
  return (course as CourseFragment).name !== undefined;
}

export const Course: React.FC<CourseProps> = ({
  course,
  toggleCourse,
  selectedCourses,
}) => {
  const selected = selectedCourses.indexOf(course.code) > -1;

  if (notSlim(course)) {
    const { code, name, points } = course;
    return (
      <CourseBlock
        onClick={() => toggleCourse(code)}
        selected={selected}
      >
        <Title>{name}</Title>
        <Subtitle>{code} - {points} poäng</Subtitle>
      </CourseBlock>
    );
  }
  return (
    <CourseBlock
      slim
      onClick={() => toggleCourse(course.code)}
      selected={selected}
    >
      <Subtitle>{course.code}</Subtitle>
    </CourseBlock>
  );
};
