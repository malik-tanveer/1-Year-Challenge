# 1️⃣ Base image (Node.js)
FROM node:18-alpine

# 2️⃣ app use folder
WORKDIR /app

# 3️⃣ package files copy
COPY package*.json ./

# 4️⃣ Dependencies install
RUN npm install

# 5️⃣ code copy
COPY . .

# 6️⃣ App port expose
EXPOSE 4000

# 7️⃣ App start cmnd
CMD ["npm", "start"]
