
---

## **Phase 2 — Month 1: November Roadmap (Full Stack: Express + MongoDB)**

**Goal:** Build Backend APIs (CRUD + Auth + File Upload)
**Duration:** 30 Days (Nov 1 – Nov 30)
**Outcome:** Blog API with Auth & File Uploads

---

### 🗓️ **Week 1 — Node.js + Express Fundamentals (Nov 1–7)**

**Focus:** Backend basics, API structure, routes, controllers, middlewares

| Day | Topics                                | Tasks / Practice                                 |
| --- | ------------------------------------- | ------------------------------------------------ |
| 1   | Intro to Node.js, npm, package.json   | Setup Node project, install `express`, `nodemon` |
| 2   | What is Express.js?                   | Create server.js, simple GET route               |
| 3   | Routing + Middleware                  | Make routes folder, custom middleware example    |
| 4   | Controllers + Modularity              | Add `controllers`, connect routes to logic       |
| 5   | HTTP Methods (GET, POST, PUT, DELETE) | CRUD routes for "tasks" (fake array)             |
| 6   | Environment Variables (`dotenv`)      | Setup `.env`, use PORT from env                  |
| 7   | Error Handling + REST Structure       | Create `errorHandler`, clean folder structure    |

**Mini Project:** “Task API” (CRUD using Express only)

---

### 🗓️ **Week 2 — MongoDB + Mongoose Integration (Nov 8–14)**

**Focus:** Database connection + CRUD with real data

| Day | Topics                       | Tasks / Practice                              |
| --- | ---------------------------- | --------------------------------------------- |
| 8   | Intro to MongoDB + Atlas     | Create cluster, connect via Mongoose          |
| 9   | Schemas & Models             | Create Task model with title, desc, completed |
| 10  | Create + Read Operations     | Add POST + GET routes using DB                |
| 11  | Update + Delete Operations   | PUT + DELETE routes with Mongoose             |
| 12  | Async/Await + Error Handling | Wrap routes in try/catch                      |
| 13  | Validation + Status Codes    | Add proper responses + validation             |
| 14  | Testing API in Postman       | CRUD test for Tasks API                       |

**Mini Project:** “Notes API” (CRUD + MongoDB)

---

### 🗓️ **Week 3 — Authentication + JWT (Nov 15–21)**

**Focus:** User System (Register, Login, Token Auth)

| Day | Topics                     | Tasks / Practice                                  |
| --- | -------------------------- | ------------------------------------------------- |
| 15  | User Model + Password Hash | Create `User` model, hash password using bcryptjs |
| 16  | Signup Route               | Register user (save hashed password)              |
| 17  | Login Route                | Compare password + generate JWT                   |
| 18  | JWT Middleware             | Protect routes using token verify                 |
| 19  | Protected Routes           | Create route that only logged users can access    |
| 20  | Auth Error Handling        | Manage invalid token, expired token               |
| 21  | Test Auth Flow             | Register → Login → Access protected route         |

**Mini Project:** “Auth API” (JWT + bcrypt + Express)

---

### 🗓️ **Week 4 — File Uploads + Final Blog API (Nov 22–30)**

**Focus:** Combine Auth + CRUD + File Upload → Final Project

| Day | Topics                         | Tasks / Practice                          |
| --- | ------------------------------ | ----------------------------------------- |
| 22  | File Upload Intro              | Setup Multer for image upload             |
| 23  | Blog Model                     | title, content, image, author             |
| 24  | Create Blog Post API           | POST route (upload + create doc)          |
| 25  | Get Blogs                      | Public route to list all blogs            |
| 26  | Update + Delete Blog           | Only author can modify/delete             |
| 27  | Combine Auth + Blog            | Protect create/update/delete with JWT     |
| 28  | Add Validation + Error Handler | Use express-validator / custom middleware |
| 29  | Test API with Postman          | Full CRUD + Auth + Upload working         |
| 30  | Project Review + GitHub Upload | Push Blog API to GitHub, write README     |

**Final Project:**
**Blog API with Auth + Image Uploads**

* Register/Login users
* CRUD blogs
* Upload images
* Protected routes

---
