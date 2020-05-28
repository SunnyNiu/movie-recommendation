FROM cypress/base:10

WORKDIR /usr/src/app
COPY . .

RUN yarn

CMD [ "yarn", "start" ]