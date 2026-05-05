# -------- BUILD STAGE --------
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -------- PRODUCTION STAGE --------
FROM nginx:alpine

# remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# copy build files
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
