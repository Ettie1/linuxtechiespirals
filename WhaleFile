FROM ubuntu:latest
RUN  apt-get update &&  apt-get -y upgrade
RUN apt-get install npm -y
RUN cp -r . /app
WORKDIR /app
RUN npm install

CMD [ "debug=techiespirals:* npm start" ]