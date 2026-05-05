Perfect 👍
Main tumhein **Day 14 ka COMPLETE `README.md`** de raha hoon — **English**, **clean**, **professional**, aur **fast-reading** style me.
Tum isko **direct copy–paste** kar sakte ho.

---

## 📄 `README.md`

```md
# Day 14 — API Testing with Postman

## Overview
On Day 14, we focus on testing backend APIs using Postman.
The goal is to verify that all routes work correctly, return proper
status codes, and handle errors safely without crashing the server.

---

## Why API Testing is Important
- Ensures backend logic is correct
- Confirms validation is working
- Verifies correct HTTP status codes
- Helps frontend developers understand API behavior
- Prevents crashes and unexpected errors

---

## Tools Used
- Node.js
- Express.js
- Postman

---

## API Base URL
```

[http://localhost:3000](http://localhost:3000)

````

---

## Endpoints Tested

### 1. Home Route
**GET /**
- Purpose: Check if server is running

**Expected Response**
- Status Code: `200 OK`
- Response:
```json
Hello, World!
````

---

### 2. Create Post (Validation Test)

**POST /posts**

**Request Body (JSON)**

```json
{
  "title": "Postman Test",
  "body": "Testing API with Postman"
}
```

**Expected Response**

* Status Code: `201 Created`

```json
{
  "message": "Post created",
  "data": {
    "id": 123456789,
    "title": "Postman Test",
    "body": "Testing API with Postman"
  }
}
```

---

### 3. Validation Error Test

**POST /posts**

**Request Body (Invalid)**

```json
{
  "title": ""
}
```

**Expected Response**

* Status Code: `400 Bad Request`

```json
{
  "error": "Title and body are required"
}
```

---

### 4. Get All Posts

**GET /posts**

**Expected Response**

* Status Code: `200 OK`
* Returns an array of posts

---

## Status Codes Used

| Status Code | Meaning            |
| ----------- | ------------------ |
| 200         | Request successful |
| 201         | Resource created   |
| 400         | Validation error   |
| 404         | Route not found    |
| 500         | Server error       |

---

## Testing Steps in Postman

1. Open Postman
2. Create a new request
3. Select HTTP method (GET / POST)
4. Enter API URL
5. For POST requests:

   * Go to Body → raw → JSON
   * Add request data
6. Click Send
7. Verify response and status code

---

## Error Handling

All API routes are wrapped in proper validation and error handling.
The server returns meaningful error messages and never crashes due to
invalid input.

---