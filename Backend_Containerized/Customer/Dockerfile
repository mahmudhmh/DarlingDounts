FROM node

WORKDIR /app/Customer

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm","start"]



