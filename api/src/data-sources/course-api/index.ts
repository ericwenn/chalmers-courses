import { DataSource } from 'apollo-datasource';
import { Collection, Cursor, Db, ObjectID } from 'mongodb';
import { Course, make } from '../collections/courses';
import { ContextualDataSource } from '../contextual-datasource';



interface Document {
  _id: ObjectID;
}


interface WithID {
  id: string;
}

function toArray<T extends Document>(cursor: Cursor<T>, replaceId: boolean = true): Promise<Array<(T & WithID)>> {
  return new Promise((resolve) => {
    const docs: Array<T & WithID> = [];
    cursor.forEach((item: T) => {
      (item as T & WithID).id = item._id.toString();
      docs.push(item as T & WithID);
    }, () => resolve(docs));
  });
}

export class CourseAPI extends ContextualDataSource {
  public courses: Collection<Course>;

  public async getAllCourses() {
    const courses = await toArray(this.courses.find());
    return courses;
  }
}
