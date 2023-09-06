FROM node:20-alpine

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
COPY tailwind.config.js /app/

RUN npm install

CMD ["npm", "start"]