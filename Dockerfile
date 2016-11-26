FROM node:argon

RUN mkdir /src

RUN npm update -g
RUN npm install

WORKDIR /src

RUN npm install node-sass

EXPOSE 3000

CMD node server.js
