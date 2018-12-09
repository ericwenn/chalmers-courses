import React, { useState } from 'react';
import { ChildProps, graphql } from 'react-apollo';
import { YearColumn } from '../blocks/year';
import { CoursesQuery } from '../graphql/__generated__/CoursesQuery';
import { Requirement } from './../blocks/requirement';
import { COURSE_QUERY } from './../graphql/course-query';

type Props = ChildProps<{}, CoursesQuery, {}>;
export const CoursesComponent: React.FunctionComponent<Props> = (props) => {

  const [selectedCourses, setCourses] = useState<string[]>([]);
  const toggleCourse = (courseCode: string) => {
    const alreadySelected = selectedCourses.indexOf(courseCode) > -1;
    if (alreadySelected) {
      setCourses(selectedCourses.filter((course) => course !== courseCode));
    } else {
      setCourses([courseCode, ...selectedCourses]);
    }
  };

  if (!props.data) { return null; }
  const { loading, program } = props.data;
  if (loading || !program) { return <div>Laddar...</div>; }

  const { years, requirements } = program;

  return(
    <div>
      { requirements.map((req, i) => <Requirement
        key={i}
        toggleCourse={toggleCourse}
        selectedCourses={selectedCourses}
        requirement={req}
      />)}

      { years.map((year, i) => <YearColumn
        key={i}
        year={year}
        selectedCourses={selectedCourses}
        toggleCourse={toggleCourse}
      />) }
    </div>
  );
};

const withCourses = graphql<{}, CoursesQuery, {}>(COURSE_QUERY);

export const Courses = withCourses(CoursesComponent);
