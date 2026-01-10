# 1. Node base image
FROM node:20

# 2. App directory inside container
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the code
COPY . .

# 6. Expose port (same as .env)
EXPOSE 5000

# 7. Start app
CMD ["node", "app.js"]
