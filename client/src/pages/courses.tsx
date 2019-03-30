import React, { useState } from 'react';
import { ChildProps, graphql } from 'react-apollo';
import styled from 'styled-components';
import { RequirementHeader } from '../blocks/requirement-header';
import { CoursesQuery } from '../graphql/__generated__/CoursesQuery';
import { RequirementEnum } from '../graphql/__generated__/globalTypes';
import { COURSE_QUERY } from './../graphql/course-query';

const Flex = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 12em;
  padding: 2em .5em 0 .5em;
  background-color: #24292e;
  color: white;
`;

const Main = styled.div`
  flex-grow: 1;
  padding: 2em;
  background-color: #f6f8fa;
`;

const H1 = styled.h1`
  font-size: 1.2em;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  font-size: 1em;
  text-transform: uppercase;
`;
const H3 = styled.h3`
  font-size: .8em;
  text-transform: uppercase;
  margin: 0;
`;

const PeriodsContainer = styled.div`
  display: flex;
  margin-bottom: 3em;
  align-items: flex-start;
`;
const Period = styled.div`
  border: 1px solid #d1d5da;
  flex-grow: 1;
  flex-shrink: 0;
  margin-right: 1em;
  width: 1em;
  background-color: white;
`;
const PeriodHeader = styled.div`
  padding: 1em;
`;

const PeriodBody = styled.div`
`;

interface CourseProps {
  selected: boolean;
}
const Course = styled.div<CourseProps>`
  padding: .5em 1em;
  border-top: 1px solid #d1d5da;
  cursor:pointer;
  border-left: 4px transparent solid;
  &:hover {
    background-color: #fafafa;
  }
  ${({ selected }) => selected && `
    border-left-color: green;
    background-color: #f3fef3;
    &:hover {
      background-color: #f3fef3;
    }
  `}
`;

const CourseCode = styled.div`
  font-size: .8em;
  font-weight: bold;
  color: #474747;
`;
const CourseName = styled.div``;

type Props = ChildProps<{}, CoursesQuery, {}>;
export const CoursesPage: React.FunctionComponent<Props> = (props) => {
  const [selectedCourses, setCourses] = useState<string[]>([]);
  const toggleCourse = (courseId: string) => {
    const alreadySelected = selectedCourses.indexOf(courseId) > -1;
    if (alreadySelected) {
      setCourses(selectedCourses.filter((course) => course !== courseId));
    } else {
      setCourses([courseId, ...selectedCourses]);
    }
  };
  console.log(props);

  if (!props.data) { return null; }
  const { loading, program } = props.data;
  if (loading || !program) { return <div>Laddar...</div>; }
  console.log(program);

  return(
    <Flex>
      <Sidebar>
        <ul>
          { program.requirements.map((req) => (
            <div key={req._id}>
              <RequirementHeader
                requirement={req}
                selectedCourses={selectedCourses} />
              {/* {req.courses.map((course) => (
                <div key={course._id}>
                  {course.code}
                </div>
              ))} */}
            </div>
          ))}
        </ul>
      </Sidebar>
      <Main>
        <H1>{program.name}</H1>
        { program.grades.map((grade) => (
          <div>
            <H2>Årskurs {grade.year}</H2>
            <PeriodsContainer>
              { grade.periods.map((period) => (
                <Period>
                  <PeriodHeader>
                    <H3>{period.name}</H3>
                  </PeriodHeader>
                  <PeriodBody>
                    { period.courses.map((course) => (
                      <Course
                        selected={selectedCourses.indexOf(course._id) > -1}
                        onClick={() => toggleCourse(course._id)}
                      >
                        <CourseCode>{course.code}</CourseCode>
                        <CourseName>{course.name} </CourseName>
                      </Course>
                    ))}
                  </PeriodBody>
                </Period>
              ))}
            </PeriodsContainer>
          </div>
        ))}
      </Main>
    </Flex>
  );
};

const withCourses = graphql<{}, CoursesQuery, {}>(COURSE_QUERY, {
  options: {
    fetchPolicy: 'network-only',
  },
});

export const Courses = withCourses(CoursesPage);
