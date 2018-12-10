import React, { useState } from 'react';
import { ChildProps, graphql } from 'react-apollo';
import { Program } from '../blocks/program';
import { YearColumn } from '../blocks/year';
import { CoursesQuery } from '../graphql/__generated__/CoursesQuery';
import { Requirement } from './../blocks/requirement';
import { COURSE_QUERY } from './../graphql/course-query';

type Props = ChildProps<{}, CoursesQuery, {}>;
export const CoursesComponent: React.FunctionComponent<Props> = (props) => {



  if (!props.data) { return null; }
  const { loading, program } = props.data;
  if (loading || !program) { return <div>Laddar...</div>; }

  return(<Program program={program} />);
};

const withCourses = graphql<{}, CoursesQuery, {}>(COURSE_QUERY);

export const Courses = withCourses(CoursesComponent);
