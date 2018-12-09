import { MongoClient, MongoClientOptions } from 'mongodb';

export const connectToDatabase = (url: string, options?: MongoClientOptions) => {
  const db = MongoClient.connect(
    url,
    { useNewUrlParser: true, ...options },
  ).then((client) => client.db());

  db.catch((err) => {
    console.error(
      `Could not connect to database at ${url}.
      Failed with error:`);
    console.error(err);
  });
  return db;
};
