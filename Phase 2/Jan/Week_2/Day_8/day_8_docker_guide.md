# Day 8 — Docker Basics

## What is Docker?
Docker is a platform that allows developers to **package applications and their dependencies into a single unit called a container**. Containers are lightweight, portable, and ensure that your app runs the same way everywhere.

### Key Concepts:
- **Image:** A blueprint or template of your application including all dependencies. Think of it like a snapshot of your app ready to run.
- **Container:** A running instance of an image. Containers are isolated from your system but can interact with it through exposed ports and volumes.

**Difference:**
| Feature | Image | Container |
|---------|-------|-----------|
| What is it? | Template / snapshot of your app | Running instance of the image |
| State | Static | Dynamic (running app) |
| Usage | Build once | Run multiple times |

### What you can do with Docker
- Run your app locally in a clean environment
- Test your app with the same setup on any machine
- Run multiple apps together using Docker Compose
- Prepare your app for production deployment

---

## Docker Workflow for a Full MERN App

### Step 1: Setup Docker in your system
- Install Docker Desktop (Windows/Mac) or Docker Engine (Linux)
- Verify installation:
```bash
docker --version
docker run hello-world
```

### Step 2: Dockerize Your App
**Backend:**
1. Create `Dockerfile` in the backend folder:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```
2. Build image:
```bash
docker build -t mern-backend .
```

**Frontend (Optional for now):**
- Can also create a Dockerfile and serve build files using `nginx` or backend.

### Step 3: Run Container Locally
```bash
docker run -p 5000:5000 mern-backend
```
- `-p hostPort:containerPort` exposes your app to your machine.

### Step 4: Using Docker Compose (for Backend + DB)
1. Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGO_URL=mongodb://mongo:27017/mern_blog
    depends_on:
      - mongo

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```
2. Run all services:
```bash
docker-compose up -d
```

### Step 5: Deploy Your App
- Push images to Docker Hub (optional):
```bash
docker tag mern-backend yourusername/mern-backend:latest
docker push yourusername/mern-backend:latest
```
- Deploy to cloud servers (AWS ECS, DigitalOcean, Render, Railway) using Docker or Docker Compose.
- Start containers on the server:
```bash
docker-compose up -d
```

### ✅ Summary
1. Install Docker
2. Dockerize backend (and frontend)
3. Run containers locally
4. Optionally use Docker Compose for multiple services
5. Push images or deploy directly to cloud

This workflow ensures your MERN app is **portable, consistent, and production-ready**.

