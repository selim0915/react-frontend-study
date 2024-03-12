FROM node:14
LABEL maintainer="srwoo <selim0915@gmail.com>"
LABEL version="0.0.0.1"
LABEL description="dev-project"
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]