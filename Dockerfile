FROM node:latest

RUN npm install nest -g --save
 
WORKDIR /usr/src/backend

COPY . /usr/src/backend/
 
COPY package*.json /usr/src/backend/

RUN npm install bcrypt --save
 
RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]