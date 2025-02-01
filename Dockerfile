FROM node:alpine

WORKDIR /USERMANAGEMENT-UI/src/app

COPY . /USERMANAGEMENT-UI/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]