FROM node

WORKDIR /nodejs-rest-api

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start:dev"]