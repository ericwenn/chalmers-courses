import * as GQL from 'apollo-server-core/src/graphqlOptions';
import { CourseAPI } from './data-sources/course-api';


export interface DataSources<T = any> extends GQL.DataSources<T> {
  courseAPI: CourseAPI;
}

export interface Context<T = any> {
  dataSources: DataSources<T>;
}
