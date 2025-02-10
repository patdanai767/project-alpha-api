FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install 

COPY . .

EXPOSE 8080

ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0


CMD ["npm", "run", "start:prod", "--host=0.0.0.0"] 