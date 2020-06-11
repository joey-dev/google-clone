FROM node:latest

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /app

COPY ./spa/ ./

RUN npm install
RUN npm install -g serve

CMD serve -s build

EXPOSE 3000
