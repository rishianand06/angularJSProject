FROM node:8.9.1
RUN mkdir -p /usr/src/storeapp 
COPY dist /usr/src/storeapp/app
COPY authMiddleware.js /usr/src/storeapp/
COPY data.js /usr/src/storeapp/
COPY deploy-server.js /usr/src/storeapp/server.js
COPY deploy-package.json /usr/src/storeapp/package.json
WORKDIR /usr/src/storeapp
RUN npm install
EXPOSE 3000
EXPOSE 3500
CMD ["npm", "start"]

