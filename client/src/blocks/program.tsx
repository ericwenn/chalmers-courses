import React, { useState } from 'react';
import styled from 'styled-components';
import { ProgramFragment } from '../graphql/__generated__/ProgramFragment';
import { Requirement } from './requirement';
import { YearColumn } from './year';

interface ProgramProps {
  program: ProgramFragment;
}

const ProgramWrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 12em;
  padding: 2em .5em 0 .5em;
`;
const SidebarTitle = styled.h1`
  margin: 0;
`;

const Main = styled.div`
  background-color: #B71C1C;
  padding: 2em;
  border-radius: 6px;
  flex-grow: 1;
`;

export const Program: React.FC<ProgramProps> = ({
  program: {
    name,
    requirements,
    years,
  },
}) => {
  const [selectedCourses, setCourses] = useState<string[]>([]);
  const toggleCourse = (courseCode: string) => {
    const alreadySelected = selectedCourses.indexOf(courseCode) > -1;
    if (alreadySelected) {
      setCourses(selectedCourses.filter((course) => course !== courseCode));
    } else {
      setCourses([courseCode, ...selectedCourses]);
    }
  };

  return (
    <ProgramWrapper>
      <Sidebar>
        <SidebarTitle>{name}</SidebarTitle>
        { requirements.map((req, i) => <Requirement
          key={i}
          toggleCourse={toggleCourse}
          selectedCourses={selectedCourses}
          requirement={req}
        />)}
      </Sidebar>
      <Main>
        { years.map((year, i) => <YearColumn
          key={i}
          year={year}
          selectedCourses={selectedCourses}
          toggleCourse={toggleCourse}
        />) }
      </Main>
    </ProgramWrapper>
  );
};
