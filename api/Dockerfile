FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

ADD package.json /app/package.json
RUN npm install

ADD tsconfig.json /app/tsconfig.json
ADD nodemon.json /app/nodemon.json

ADD src/. /app/src

EXPOSE 3000
CMD npm start
