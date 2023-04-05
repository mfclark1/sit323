FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY calculator.js .

EXPOSE 8080
CMD [ "node", "calculator.js" ]

