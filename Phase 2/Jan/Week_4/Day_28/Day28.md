# Day 28 — Security Review (Token Rules + API Validation)

## Goal
Make your backend secure by enforcing:
1) Token rules (authentication + authorization)
2) API validation (clean + safe requests)

This prevents:
- Unauthorized access
- Fake requests
- Role injection
- Bad data entering your database

---

## 1) Token Rules (Authentication + Authorization)

### What is a Token?
A token (usually JWT) is a proof that the user is logged in.
The client sends the token with every protected request.

Common format:
```

Authorization: Bearer <token>

````

---

### Authentication vs Authorization
**Authentication**
- “Is the user logged in?”
- Token must be present and valid

**Authorization**
- “Is the user allowed to do this action?”
- Example: only admin can delete users
- Example: user can only edit their own post

---

### Token Rules Checklist
You should enforce these rules:

#### A) Protected Routes Must Require Token
Example routes that must be protected:
- `GET /api/profile`
- `POST /api/posts`
- `DELETE /api/posts/:id`

If token is missing:
- return `401 Unauthorized`

---

#### B) Verify Token in Middleware
Use a middleware that:
1. Reads token from header
2. Verifies it using your secret
3. Attaches user data to `req.user`

Expected behavior:
- Token missing -> `401 Unauthorized`
- Token invalid -> `401 Unauthorized`
- Token valid -> continue request

---

#### C) Token Expiry Must Exist
Tokens should expire so old tokens can’t be used forever.

Example expiry:
- `15m`, `1h`, `1d`

---

#### D) Never Trust Client for User Identity
Do NOT accept `userId` from request body for ownership.

Wrong:
```json
{
  "title": "Hello",
  "content": "Test",
  "userId": "someone-else-id"
}
````

Correct:

* Get user id from token:
* `req.user.id`

---

#### E) Authorization Rules (Roles + Ownership)

Examples:

* Only admin can delete users
* User can only update their own profile
* User can only delete their own post

Return:

* `403 Forbidden` when user is logged in but not allowed

---

## 2) API Validation (Request Validation)

### What is API Validation?

Validation means checking incoming data before using it.

Without validation, users can send:

* empty fields
* wrong data types
* huge strings
* invalid emails
* unwanted extra fields like `role: "admin"`

---

### What to Validate

Validation should cover:

#### A) Required Fields

Example: Register route requires:

* name
* email
* password

If missing:

* return `400 Bad Request`

---

#### B) Format Validation

Examples:

* email must be valid format
* password min length (6 or 8)
* title max length

---

#### C) Type Validation

Examples:

* age must be number
* id must be valid MongoDB ObjectId

---

#### D) Validate Params + Query Too

Not only `req.body`.

Also validate:

* `req.params.id`
* `req.query.page`
* `req.query.limit`

---

#### E) Block Unknown / Extra Fields

Users can try to inject fields like:

```json
{
  "name": "Ali",
  "email": "ali@test.com",
  "password": "123456",
  "role": "admin"
}
```

Solution:

* Only allow specific fields
* Ignore or reject unknown fields

---

## 3) Recommended HTTP Status Codes

Use correct status codes for clarity:

* `200 OK` → request successful
* `201 Created` → new resource created
* `400 Bad Request` → validation failed
* `401 Unauthorized` → token missing/invalid
* `403 Forbidden` → no permission
* `404 Not Found` → resource not found
* `500 Server Error` → unexpected backend error

---

## 4) Common Security Mistakes

Avoid these mistakes:

1. No token verification on protected routes
2. Trusting `userId` from client
3. No validation on create/update routes
4. Allowing unknown fields (role injection)
5. Storing passwords in plain text (must hash)
6. Returning full error stack in production

---

## 5) Mini Security Checklist (Day 28)

Before deploying, confirm:

* [ ] All protected routes require token
* [ ] Token verification middleware works
* [ ] Ownership rules are enforced
* [ ] Admin-only routes are protected
* [ ] Validation added to POST/PUT routes
* [ ] ObjectId validation exists
* [ ] Correct status codes used
* [ ] Secrets stored in `.env` (not in code)

---

## Summary

Day 28 is about making your backend production-ready by:

* Enforcing token rules (auth + permissions)
* Validating every API request (safe + clean data)

This is one of the most important steps before real deployment.
