FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

ADD package.json /app/package.json
RUN npm install

ADD tsconfig.json /app/tsconfig.json

ADD src/. /app/src
RUN npm run build
ADD src/schema.graphql dist/schema.graphql
EXPOSE 3000
CMD npm start
