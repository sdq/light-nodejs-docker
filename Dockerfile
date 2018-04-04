FROM node:8.10.0-alpine
COPY ./app /usr/app
WORKDIR /usr/app
RUN cd /usr/app && npm install --production
EXPOSE 8080
CMD [ "npm", "start" ]