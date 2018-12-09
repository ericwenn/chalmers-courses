import { ApolloServer } from 'apollo-server';
import { DataSources } from './context';
import { makeCourseAPI } from './data-sources/make-course-api';
import { connectToDatabase } from './lib/connect-to-database';
import { loadSchema } from './lib/load-schema';
import * as resolvers from './resolvers';

const {
  MONGO_URL = 'mongodb://localhost:27017/ccourses',
} = process.env;

const prepareServer = async (callback: (server: ApolloServer) => void) => {
  const database = await connectToDatabase(MONGO_URL);
  const courseAPI = await makeCourseAPI(database);
  const typeDefs = loadSchema('./schema.graphql');

  const dataSources = (): DataSources => ({
    courseAPI: courseAPI(),
  });

  const server = new ApolloServer({
    typeDefs,
    dataSources,
    resolvers,
  });
  callback(server);
};

prepareServer((server) => {
  server.listen(3000);
});
