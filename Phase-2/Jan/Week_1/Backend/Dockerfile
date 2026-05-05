# 1. Base image
FROM node:20-alpine

# 2. App directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install --production

# 5. Copy rest of code
COPY . .

# 6. Expose backend port
EXPOSE 5000

# 7. Start backend
CMD ["node", "server.js"]
