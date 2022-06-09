# build stage
FROM node:14 as build-stage

ENV HOME /opt/src/vndc/app
WORKDIR $HOME

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .
RUN yarn install --force

RUN yarn build:prod

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /opt/src/vndc/app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# EXPOSE 5040 - mapping with client port
CMD ["nginx", "-g", "daemon off;"]
