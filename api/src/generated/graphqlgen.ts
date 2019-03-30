// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import {
  Program,
  Grade,
  Period,
  Course,
  CompulsoryRequirement,
  CourseCompulsoryElectiveRequirement,
  PointsCompulsoryElectiveRequirement
} from "../data-sources/types";
import { Context } from "../context";

type BlockEnum =
  | "NO_BLOCK"
  | "A"
  | "A_PLUS"
  | "B"
  | "B_PLUS"
  | "C"
  | "C_PLUS"
  | "D"
  | "D_PLUS";
type RequirementEnum = "courses" | "points" | "compulsory";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ProgramInput {
    name: string | null;
  }

  export interface ArgsPrograms {
    query: ProgramInput | null;
  }

  export type ProgramsResolver = (
    parent: undefined,
    args: ArgsPrograms,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Program[] | Promise<Program[]>;

  export type ProgramResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Program | Promise<Program>;

  export interface Type {
    programs: (
      parent: undefined,
      args: ArgsPrograms,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Program[] | Promise<Program[]>;

    program: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Program | Promise<Program>;
  }
}

export namespace ProgramResolvers {
  export const defaultResolvers = {
    _id: (parent: Program) => parent._id,
    name: (parent: Program) => parent.name
  };

  export type _idResolver = (
    parent: Program,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Program,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type GradesResolver = (
    parent: Program,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Grade[] | Promise<Grade[]>;

  export type RequirementsResolver = (
    parent: Program,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => {}[] | Promise<{}[]>;

  export interface Type {
    _id: (
      parent: Program,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Program,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    grades: (
      parent: Program,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Grade[] | Promise<Grade[]>;

    requirements: (
      parent: Program,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => {}[] | Promise<{}[]>;
  }
}

export namespace GradeResolvers {
  export const defaultResolvers = {
    _id: (parent: Grade) => parent._id,
    year: (parent: Grade) => parent.year
  };

  export type _idResolver = (
    parent: Grade,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type YearResolver = (
    parent: Grade,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type PeriodsResolver = (
    parent: Grade,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Period[] | Promise<Period[]>;

  export interface Type {
    _id: (
      parent: Grade,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    year: (
      parent: Grade,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;

    periods: (
      parent: Grade,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Period[] | Promise<Period[]>;
  }
}

export namespace PeriodResolvers {
  export const defaultResolvers = {
    _id: (parent: Period) => parent._id,
    name: (parent: Period) => parent.name
  };

  export type _idResolver = (
    parent: Period,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Period,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CoursesResolver = (
    parent: Period,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Course[] | Promise<Course[]>;

  export interface Type {
    _id: (
      parent: Period,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Period,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    courses: (
      parent: Period,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Course[] | Promise<Course[]>;
  }
}

export namespace CourseResolvers {
  export const defaultResolvers = {
    _id: (parent: Course) => parent._id,
    code: (parent: Course) => parent.code,
    name: (parent: Course) => parent.name,
    points: (parent: Course) => parent.points
  };

  export type _idResolver = (
    parent: Course,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Course,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CodeResolver = (
    parent: Course,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PointsResolver = (
    parent: Course,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type BlockResolver = (
    parent: Course,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => BlockEnum | Promise<BlockEnum>;

  export interface Type {
    _id: (
      parent: Course,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Course,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    code: (
      parent: Course,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    points: (
      parent: Course,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    block: (
      parent: Course,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => BlockEnum | Promise<BlockEnum>;
  }
}

export namespace CompulsoryRequirementResolvers {
  export const defaultResolvers = {
    _id: (parent: CompulsoryRequirement) => parent._id,
    type: (parent: CompulsoryRequirement) => parent.type
  };

  export type _idResolver = (
    parent: CompulsoryRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TypeResolver = (
    parent: CompulsoryRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => RequirementEnum | Promise<RequirementEnum>;

  export type CoursesResolver = (
    parent: CompulsoryRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Course[] | Promise<Course[]>;

  export interface Type {
    _id: (
      parent: CompulsoryRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    type: (
      parent: CompulsoryRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => RequirementEnum | Promise<RequirementEnum>;

    courses: (
      parent: CompulsoryRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Course[] | Promise<Course[]>;
  }
}

export namespace CourseCompulsoryElectiveRequirementResolvers {
  export const defaultResolvers = {
    _id: (parent: CourseCompulsoryElectiveRequirement) => parent._id,
    type: (parent: CourseCompulsoryElectiveRequirement) => parent.type,
    choose: (parent: CourseCompulsoryElectiveRequirement) => parent.choose
  };

  export type _idResolver = (
    parent: CourseCompulsoryElectiveRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TypeResolver = (
    parent: CourseCompulsoryElectiveRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => RequirementEnum | Promise<RequirementEnum>;

  export type ChooseResolver = (
    parent: CourseCompulsoryElectiveRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type CoursesResolver = (
    parent: CourseCompulsoryElectiveRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Course[] | Promise<Course[]>;

  export interface Type {
    _id: (
      parent: CourseCompulsoryElectiveRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    type: (
      parent: CourseCompulsoryElectiveRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => RequirementEnum | Promise<RequirementEnum>;

    choose: (
      parent: CourseCompulsoryElectiveRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    courses: (
      parent: CourseCompulsoryElectiveRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Course[] | Promise<Course[]>;
  }
}

export namespace PointsCompulsoryElectiveRequirementResolvers {
  export const defaultResolvers = {
    _id: (parent: PointsCompulsoryElectiveRequirement) => parent._id,
    type: (parent: PointsCompulsoryElectiveRequirement) => parent.type,
    choose: (parent: PointsCompulsoryElectiveRequirement) => parent.choose
  };

  export type _idResolver = (
    parent: PointsCompulsoryElectiveRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TypeResolver = (
    parent: PointsCompulsoryElectiveRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => RequirementEnum | Promise<RequirementEnum>;

  export type ChooseResolver = (
    parent: PointsCompulsoryElectiveRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type CoursesResolver = (
    parent: PointsCompulsoryElectiveRequirement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Course[] | Promise<Course[]>;

  export interface Type {
    _id: (
      parent: PointsCompulsoryElectiveRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    type: (
      parent: PointsCompulsoryElectiveRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => RequirementEnum | Promise<RequirementEnum>;

    choose: (
      parent: PointsCompulsoryElectiveRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    courses: (
      parent: PointsCompulsoryElectiveRequirement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Course[] | Promise<Course[]>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Program: ProgramResolvers.Type;
  Grade: GradeResolvers.Type;
  Period: PeriodResolvers.Type;
  Course: CourseResolvers.Type;
  CompulsoryRequirement: CompulsoryRequirementResolvers.Type;
  CourseCompulsoryElectiveRequirement: CourseCompulsoryElectiveRequirementResolvers.Type;
  PointsCompulsoryElectiveRequirement: PointsCompulsoryElectiveRequirementResolvers.Type;
}
