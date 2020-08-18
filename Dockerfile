FROM node:11
LABEL name="node-mvc"
WORKDIR /app
COPY package.json /app
RUN npm install --registry=https://registry.npm.taobao.org
COPY ./dist /app
EXPOSE 3000
CMD [ "node", "app.js" ]
