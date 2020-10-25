FROM node:14.13.1
WORKDIR /app
COPY package.json /app/package.json
COPY . /app
RUN yarn install
RUN yarn run build
