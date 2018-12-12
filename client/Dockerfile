FROM node:10-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY tsconfig.json ./
COPY ./src ./src
COPY ./public ./public

ARG REACT_APP_GRAPHL_URL
RUN yarn build
RUN ls /usr/src/app/build

FROM nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
