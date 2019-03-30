import React from 'react';
// import styled from 'styled-components';
// import {
//   RequirementFragment,
//   RequirementFragment_CompulsoryElectiveRequirement,
//   RequirementFragment_CompulsoryRequirement,
// } from './../graphql/__generated__/RequirementFragment';


// interface CourseProps {
//   requirement: RequirementFragment;
//   toggleCourse: (courseCode: string) => void;
//   selectedCourses: string[];
// }

// const List = styled.div`
//   padding: 1em 0;
// `;

// interface ListTitle {
//   fulfilled: boolean;
// }
// const ListTitle = styled.div<ListTitle>`
//   text-transform: uppercase;
//   font-size: .8em;
//   color: ${({ fulfilled }) => fulfilled ? '#1B5E20' : '#777'};
// `;
// interface ListItemProps {
//   selected: boolean;
// }
// const ListItem = styled.div<ListItemProps>`
//   padding: .3em .5em;
//   border-bottom: 1px #efefef solid;
//   cursor: pointer;
//   font-weight: ${({ selected }) => selected ? 'bold' : 'normal'}
// `;

// function isCompulsoryElective(
//   requirement: RequirementFragment_CompulsoryElectiveRequirement | RequirementFragment_CompulsoryRequirement,
// ): requirement is RequirementFragment_CompulsoryElectiveRequirement {
//   return requirement.__typename === 'CompulsoryElectiveRequirement';
// }

// export const Requirement: React.FC<CourseProps> = ({
//   requirement,
//   toggleCourse,
//   selectedCourses,
// }) => {
//   const fulfilledCourses = requirement.courses.filter(({ code }) => selectedCourses.indexOf(code) > -1);
//   let fulfilled;
//   if (isCompulsoryElective(requirement)) {
//     fulfilled = requirement.choose <= fulfilledCourses.length;
//   } else {
//     fulfilled = fulfilledCourses.length === requirement.courses.length;
//   }
//   const {
//     type,
//     courses,
//   } = requirement;
//   return (
//     <List>
//       <ListTitle fulfilled={fulfilled}>
//         {fulfilled && '✔ '}
//         {type}
//       </ListTitle>
//       { courses.map((course) => {
//         const selected = selectedCourses.indexOf(course.code) > -1;
//         return (
//           <ListItem
//             selected={selected}
//             onClick={() => toggleCourse(course.code)}>
//             {course.code}
//           </ListItem>
//           );
//         },
//       )}
//     </List>
//   );
// };
