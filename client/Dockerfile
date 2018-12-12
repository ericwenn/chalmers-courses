FROM node:10-alpine as build-deps
RUN apk add --no-cache alpine-sdk && \
    cd /tmp && curl -s -LO https://github.com/jpmens/jo/releases/download/v1.1/jo-1.1.tar.gz && \
    tar xzf jo-1.1.tar.gz && \
    cd jo-1.1 && \
    ./configure && \
    make check && \
    make install

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
COPY entrypoint.sh /usr/local/bin/start-app
COPY --from=build-deps /usr/local/bin/jo /usr/local/bin/jo
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

RUN chmod +x /usr/local/bin/start-app && \
    chmod +x /usr/local/bin/jo

EXPOSE 80
CMD ["sh", "/usr/local/bin/start-app" ]
