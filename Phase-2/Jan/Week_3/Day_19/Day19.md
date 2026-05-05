
# Day 19 — Volumes & Bind Mounts (Docker)

## 🎯 Goal
Understand how Docker stores data and how to make it **persistent** and **developer-friendly** using:
- **Bind Mounts** (best for development)
- **Docker Volumes** (best for databases & production)

---

## 1) Why do we need Volumes or Bind Mounts?

By default, Docker containers have their own filesystem.
If you delete a container, its data is also deleted.

That means:
- Container data is **NOT persistent** by default ❌
- You need a way to keep important data safe ✅

---

## 2) Bind Mounts (Best for Development)

### ✅ What is a Bind Mount?
A bind mount connects a folder from your computer (host) directly into the container.

So when you change your code on your laptop, the container automatically sees the updated code.

### ⭐ Best Use Case
- Node/Express development
- Hot reload with nodemon
- No need to rebuild the image every time you change code

---

### 🧪 Example (Bind Mount - Express Dev Workflow)

**Windows CMD / PowerShell:**
```bash
docker run -p 5000:5000 ^
  -v "%cd%":/app ^
  -v /app/node_modules ^
  docker-express
````

### 🔍 Explanation

* `-v "%cd%":/app`

  * Mounts your current folder into `/app` inside the container
* `-v /app/node_modules`

  * Prevents conflicts between host and container dependencies

### ✅ Result

* Code updates are reflected instantly inside the container
* Fast development workflow

---

## 3) Docker Volumes (Best for Persistent Data)

### ✅ What is a Docker Volume?

A Docker volume is storage managed by Docker itself.
It stays safe even if the container is removed.

### ⭐ Best Use Case

* Databases (MongoDB, MySQL, PostgreSQL)
* Persistent uploads folder
* Production-ready storage

---

### 🧪 Example (Volume - MongoDB Persistent Data)

#### Step 1: Create a Volume

```bash
docker volume create mongo_data
```

#### Step 2: Run MongoDB with Volume

```bash
docker run -d --name mongo ^
  -p 27017:27017 ^
  -v mongo_data:/data/db ^
  mongo
```

### 🔍 Explanation

* `mongo_data:/data/db`

  * Saves MongoDB database files in the volume
  * Data will remain even if the MongoDB container is deleted

---

## 4) Bind Mount vs Volume (Quick Comparison)

| Feature       | Bind Mount             | Docker Volume           |
| ------------- | ---------------------- | ----------------------- |
| Best For      | Development            | Production / DB Storage |
| Data Location | Your computer folder   | Docker-managed storage  |
| Speed         | Good                   | Very fast               |
| Persistence   | Depends on host folder | Always persistent       |
| Recommended   | Dev only               | Production safe         |

---

## 5) Useful Commands

### List Volumes

```bash
docker volume ls
```

### Inspect a Volume

```bash
docker volume inspect mongo_data
```

### Remove a Volume (Warning: Deletes data)

```bash
docker volume rm mongo_data
```

---

##  Summary

* **Bind Mounts** = Best for development (live code updates, no rebuild)
* **Volumes** = Best for databases and production (persistent storage)

