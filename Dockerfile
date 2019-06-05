FROM node:8.15.0

ENV NODE_ENV=development

RUN apt-get update \
 && apt-get -y install vim

WORKDIR /app