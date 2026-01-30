```md
# Day 20 — Rebuild & Versioning (Tagging) in Docker

## 🎯 Goal
Learn how Docker **rebuilds images** and how to manage different releases using:
- **Image rebuilding**
- **Tagging / Versioning**
- **Rollback strategy**
- **Best practices for dev vs production**

---

## 1) What is a Docker Image Tag?

A Docker image name usually looks like this:

```

image_name:tag

```

Examples:
```

docker-express:latest
docker-express:v1
docker-express:v2

````

### ✅ Important Note
A tag is not just a “label”.
It is a **version identifier** that helps you control which build you run and deploy.

---

## 2) Why Tagging Matters (Real Benefits)

### ✅ Benefit 1: Rollback (Most Important)
If a new version breaks your app, you can instantly go back to the old stable version.

Example:
```bash
docker run -p 5000:5000 docker-express:v1
````

---

### ✅ Benefit 2: Production Stability

Using `latest` is risky because it can change anytime.

Better approach:

* Use stable versions like `v1.0.0`, `v1.0.1`, `v2.0.0`
* Deploy a fixed version for production

---

### ✅ Benefit 3: Run Multiple Versions Side-by-Side

You can run two versions at the same time on different ports:

```bash
docker run -d -p 5000:5000 --name api-v1 docker-express:v1
docker run -d -p 5001:5000 --name api-v2 docker-express:v2
```

This is useful for:

* Testing
* Comparing changes
* Debugging

---

### ✅ Benefit 4: Easy Debugging

If an issue happens in production, tags help you know exactly which version is running.

Check running containers:

```bash
docker ps
```

---

### ✅ Benefit 5: Clean CI/CD Releases

When pushing to Docker Hub, you can publish:

* `:latest` → most recent build
* `:v1`, `:v2` → stable releases

Example:

```
username/express-docker-starter:latest
username/express-docker-starter:v2
```

---

## 3) What Does “Rebuild” Mean?

A Docker container runs from a Docker image.

If you change your source code, the running container will NOT automatically update unless you:

* rebuild the image, or
* use bind mounts (dev mode)

### Example: Rebuild after code changes

```bash
docker build -t docker-express:v2 .
```

---

## 4) Tagging Examples (Step-by-Step)

### Build Version 1

```bash
docker build -t docker-express:v1 .
```

### Run Version 1

```bash
docker run -d -p 5000:5000 --name api-v1 docker-express:v1
```

---

### Build Version 2 (After changes)

```bash
docker build -t docker-express:v2 .
```

### Stop old container and run new version

```bash
docker stop api-v1
docker rm api-v1
docker run -d -p 5000:5000 --name api-v2 docker-express:v2
```

---

## 5) Tagging for Docker Hub

If your Docker Hub username is `username`, you can tag your image like this:

```bash
docker tag docker-express:v2 username/express-docker-starter:v2
docker tag docker-express:v2 username/express-docker-starter:latest
```

---

## 6) Pushing Tagged Images to Docker Hub

```bash
docker push username/express-docker-starter:v2
docker push username/express-docker-starter:latest
```

---

## 7) Dev vs Production Workflow (Best Practice)

### ✅ Development Workflow

Use **Bind Mounts** to avoid rebuilding images again and again.

* Fast code updates
* Best with nodemon

### ✅ Production Workflow

Use **Rebuild + Version Tags** for stability and rollback.

* Fixed versions
* Easy rollback
* Safe deployments

---

## ✅ Summary

* Tags help you manage different image versions (v1, v2, latest)
* Rebuilding is required when you want updated code inside the image
* Tagging makes deployment safer and rollback easier
* Bind mounts are best for development, tagging is best for production releases

---

