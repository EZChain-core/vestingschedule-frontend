FROM node:14 as build-stage

ENV HOME /opt/src/vndc/app
WORKDIR $HOME

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .
CMD [ "yarn", "dev" ]