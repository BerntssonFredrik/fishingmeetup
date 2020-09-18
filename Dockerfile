FROM node:12

ENV DB_USER "fredrikberntsson"
ENV DB_PASSWORD "fredrikberntsson"
ENV PORT "8080"


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080


CMD [ "npm", "run", "start", "dist/" ]