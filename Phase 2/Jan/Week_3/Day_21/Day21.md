
# Day 21 — Local Production Test (Docker Only)

## 🎯 Goal
Run and test your backend like a real production environment using **Docker only**.

This means:
- Your app runs inside a container
- No need to run Node.js manually on your system
- You test it the same way it will run in deployment

---

## 1) What is “Local Production Test”?

A local production test means:

✅ Build the image  
✅ Run the container in background  
✅ Test API endpoints  
✅ Check logs  
✅ Restart container safely  
✅ Make sure everything works without your local dev environment

---

## 2) Build the Docker Image (Production Build)

From your project root (where Dockerfile exists):

```bash
docker build -t docker-express:latest .
````

### 🔍 Explanation

* `docker build` creates a new Docker image
* `-t docker-express:latest` gives it a name and tag
* `.` means “use current folder as build context”

---

## 3) Run the Container Like Production

### Run in background (detached mode)

```bash
docker run -d --name express-prod -p 5000:5000 docker-express:latest
```

### 🔍 Explanation

* `-d` runs container in background
* `--name express-prod` gives your container a friendly name
* `-p 5000:5000` maps ports:

  * Host: `5000`
  * Container: `5000`

---

## 4) Test the App in Browser or Postman

Open these URLs:

* Home route:

  ```
  http://localhost:5000/
  ```

* Health check route:

  ```
  http://localhost:5000/health
  ```

* Users API:

  ```
  http://localhost:5000/api/users
  ```

---

## 5) Test Using cURL (Optional)

### Health check

```bash
curl http://localhost:5000/health
```

Expected response example:

```json
{
  "success": true,
  "message": "✅ Server is healthy",
  "time": "2026-01-01T00:00:00.000Z"
}
```

---

## 6) Check Container Logs (Monitoring)

### View logs

```bash
docker logs express-prod
```

### Follow logs live

```bash
docker logs -f express-prod
```

Logs help you debug:

* requests
* errors
* crashes
* server startup messages

---

## 7) Check Container Status

### Running containers

```bash
docker ps
```

### All containers (including stopped)

```bash
docker ps -a
```

---

## 8) Restart Policy (Production Feature)

In production, you usually want your container to restart automatically if it crashes.

Run with restart policy:

```bash
docker run -d --restart=unless-stopped --name express-prod -p 5000:5000 docker-express:latest
```

### Restart Policy Options

* `no` (default)
* `always`
* `unless-stopped` ✅ (recommended)
* `on-failure`

---

## 9) Stop and Remove Container (Clean Up)

### Stop container

```bash
docker stop express-prod
```

### Remove container

```bash
docker rm express-prod
```

---

## 10) Quick “Production Test” Checklist ✅

✔ Image builds successfully
✔ Container runs in background
✔ API endpoints respond correctly
✔ Logs show requests/errors properly
✔ Restart policy works
✔ No dependency on local Node setup

---

## ✅ Summary

Local production testing helps you confirm your app is ready for deployment.

* Build image
* Run container like production
* Test endpoints
* Monitor logs
* Ensure stability
