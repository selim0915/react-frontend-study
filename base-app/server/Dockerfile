FROM node:18.19.0
LABEL maintainer="ht web"
LABEL version="0.0.0.1"

RUN mkdir -p /app
RUN mkdir -p /home/base-app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8003
CMD ["npm", "start"]