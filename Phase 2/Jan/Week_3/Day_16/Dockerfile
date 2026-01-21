# 1️⃣ Build stage
FROM node:18-alpine AS builder

# Working directory
WORKDIR /app

# Package files copy karo aur install karo
COPY package*.json ./
RUN npm install

# Source code copy karo aur build karo
COPY . .
RUN npm run build

# 2️⃣ Production stage (Nginx)
FROM nginx:alpine

# React build ko nginx html folder me copy karo
COPY --from=builder /app/dist /usr/share/nginx/html

# Port expose karo
EXPOSE 80

# Nginx run karo foreground me
CMD ["nginx", "-g", "daemon off;"]
