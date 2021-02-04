FROM node:12
LABEL name="node-mvc"
WORKDIR /app
COPY package.json /app
COPY pm2.conf.json /app
COPY config /app
RUN npm install --registry=https://registry.npm.taobao.org
COPY ./dist /app
EXPOSE 3000
CMD [ "node", "app.js" ]
