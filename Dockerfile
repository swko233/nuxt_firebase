FROM node:8.15.0

ENV NODE_ENV=development

RUN apt-get update \
 && apt-get -y install vim \
 && npm install -g npm \
 && npm install -g firebase-tools jest \
 && npm install

WORKDIR /app