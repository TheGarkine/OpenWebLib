FROM node:12.14.1-alpine

EXPOSE 4200


ADD . /www

WORKDIR /www
RUN npm install -g @angular/cli@7.3.9

# build the frontend
RUN npm install
RUN npm run build:ssr

# only keep production dependencies
RUN rm -rf node_modules
RUN npm install --only=prod

CMD ["npm", "run", "serve:ssr", "--host", "0.0.0.0", "--disable-host-check"]
