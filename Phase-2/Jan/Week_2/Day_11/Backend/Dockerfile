# Base image (Node.js)
FROM node:18-alpine

# app use folder
WORKDIR /app

# packages copy
COPY package*.json ./

# Dependencies install
RUN npm install

# code copy
COPY . .

# App port expose
EXPOSE 3000

# App start cmnd
CMD ["npm", "start"]
