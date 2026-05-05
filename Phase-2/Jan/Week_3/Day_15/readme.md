
## 🎯 Day 15 Goal

The goal of **Day 15** is to understand and use **Environment Variables** in Docker the **right way**, just like in real production systems.

By the end of this day, you should be able to:

* Understand what `.env` files are
* Use environment variables in **Backend (Node/Express)**
* Use environment variables in **Frontend (React/Vite)**
* Run Docker containers with `.env`
* Use `.dockerignore` correctly
* Write clean Dockerfiles for both frontend and backend
* Keep secrets safe in production

---

## 1️⃣ What are Environment Variables?

Environment variables are **external configuration values** that your application reads at runtime.

They are used for:

* Ports
* Database URLs
* API keys
* JWT secrets
* Environment modes (development / production)

### Example (Node.js):

```js
process.env.PORT
process.env.JWT_SECRET
```

✅ They are **not hardcoded** in the source code
❌ They should **never be pushed to GitHub**

---

## 2️⃣ What is a `.env` file?

A `.env` file is a simple text file that stores environment variables.

### Example `.env`:

```env
PORT=4000
JWT_SECRET=supersecretkey
MONGO_URI=mongodb://localhost:27017/app
```

Rules:

* One variable per line
* Format: `KEY=value`
* No quotes needed
* Must be added to `.gitignore`

---

## 3️⃣ Backend `.env` Setup (Node / Express)

### Install dotenv:

```bash
npm install dotenv
```

### Use in code:

```js
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
```

Now your backend is **environment-aware** and production-ready.

---

## 4️⃣ Running Docker with Environment Variables

### ✅ Method 1: Using `-e` flags

```bash
docker run -e PORT=4000 -e JWT_SECRET=abc backend
```

✔ Works
❌ Not scalable
❌ Not clean for production

---

### ✅ Method 2: Using `--env-file` (Recommended)

```bash
docker run --env-file .env backend
```

✔ Clean
✔ Secure
✔ Easy to manage

This is the **preferred way** when running containers manually.

---

## 5️⃣ Best Practice: docker-compose + `.env`

Docker Compose automatically supports `.env` files.

### Example:

```yaml
services:
  backend:
    image: day14-backend
    ports:
      - "4000:4000"
    env_file:
      - ./Backend/.env
```

🔥 This is how **real production apps** are run.

---

## 6️⃣ Frontend `.env` Setup (React / Vite)

In frontend, environment variables are **build-time**, not runtime.

### Example `.env` (Vite):

```env
VITE_API_URL=http://localhost:4000
```

### Use in React:

```js
axios.get(import.meta.env.VITE_API_URL + "/api/users");
```

⚠️ Important:

* Frontend env variables must start with `VITE_`
* They are exposed in the browser
* **Never put secrets in frontend `.env`**

---

## 7️⃣ `.dockerignore` (Very Important)

`.dockerignore` works like `.gitignore`
It prevents unnecessary files from going into the Docker image.

---

### Backend `.dockerignore`

```dockerignore
node_modules
.env
.git
Dockerfile
```

---

### Frontend `.dockerignore`

```dockerignore
node_modules
dist
build
.env
.git
Dockerfile
```

✅ Smaller images
✅ Faster builds
✅ Better security

---

## 8️⃣ Backend Dockerfile (Clean & Simple)

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
```

✔ `.env` is NOT copied
✔ Env is injected at runtime

---

## 9️⃣ Frontend Dockerfile (React + Nginx)

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

✔ Fast
✔ Lightweight
✔ Production-ready

---

## 🔐 Security Rules (Must Follow)

❌ Do NOT hardcode secrets
❌ Do NOT copy `.env` into Docker image
❌ Do NOT expose secrets in frontend

✅ Use `.env` at runtime
✅ Use `.dockerignore`
✅ Use Docker Compose for multi-container apps