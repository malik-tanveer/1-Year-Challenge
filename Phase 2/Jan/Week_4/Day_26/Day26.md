# Day 26 — Logs & Monitoring (Express)

## 🎯 Goal
Make your Express backend more professional by adding:

- **Request logs** (track every API call)
- **Error logs** (track crashes and failures)
- **404 handling** (clean “route not found” responses)
- **Health check endpoint** (monitor if the API is alive)

This helps in:
✅ Debugging  
✅ Production monitoring  
✅ Faster issue fixing  
✅ Better API reliability  

---

## 1) What Are Logs?

Logs are the “history” of your backend.

They record important events like:
- Incoming requests (GET, POST, PUT, DELETE)
- Response status codes (200, 404, 500)
- Server errors and crashes
- Performance info (response time)

Example logs:
```

GET /health 200 3ms
GET /api/users 200 6ms
GET /wrong-route 404 1ms
POST /api/users 500 4ms

```

---

## 2) What Is Monitoring?

Monitoring means checking if your backend is:

- Running correctly
- Responding to requests
- Not crashing
- Healthy and stable

The most common monitoring method is a **Health Check API**:

```

GET /health

````

If it returns `200 OK`, the server is alive.

---

## 3) Request Logging with Morgan

### ✅ Why Morgan?
Morgan automatically logs every request, including:

- Method (GET/POST)
- URL path
- Status code
- Response time

### Install
```bash
npm install morgan
````

### Use in Express

```js
import morgan from "morgan";
app.use(morgan("dev"));
```

---

## 4) Error Logging (Central Error Handler)

### ✅ Why Error Handling Matters

Without a proper error handler:

* Errors can crash the server
* Responses become inconsistent
* Debugging becomes difficult

A central error handler:

* Logs the error on the server
* Returns a clean JSON response to the client

Example error response:

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

## 5) 404 Not Found Handler

If a user hits an invalid route, instead of a random error, you should return a clean response:

Example:

```
GET /abc
```

Response:

```json
{
  "success": false,
  "message": "Route not found: GET /abc"
}
```

---

## 6) Health Check Endpoint

### ✅ Why Health Checks Are Important

A health check route helps you confirm that:

* The API is online
* The server is responding properly
* Monitoring tools can check uptime

Example endpoint:

```
GET /health
```

Example response:

```json
{
  "success": true,
  "message": "Server is healthy",
  "time": "2026-01-01T00:00:00.000Z"
}
```

---

## 7) Testing Logs & Monitoring

### Test URLs

* Home:

  ```
  http://localhost:5000/
  ```

* Health Check:

  ```
  http://localhost:5000/health
  ```

* Users API:

  ```
  http://localhost:5000/api/users
  ```

### Error Test (Optional)

Create a route like:

```
GET /api/users/error-test
```

Then confirm:

* Error logs appear in the terminal
* Client receives a clean JSON error message

---

## 8) Docker Logs (Production Monitoring)

If your Express app is running in Docker:

### View logs

```bash
docker logs express-prod
```

### Follow logs live

```bash
docker logs -f express-prod
```

Docker shows everything you print using:

* `console.log()`
* `console.error()`

---

## ✅ Summary

Day 26 improves your backend by adding:

✔ Request logging (Morgan)
✔ Central error handling
✔ 404 route handling
✔ Health check endpoint
✔ Monitoring-ready workflow

---

