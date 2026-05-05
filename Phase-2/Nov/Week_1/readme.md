
---

## 🗓️ Week 1 — Node.js + Express Fundamentals

### 🎯 **Goal**

Learn the core concepts of backend development using **Node.js** and **Express**, build a modular API structure, and understand how HTTP methods, routing, controllers, middlewares, and environment variables work together to create a real-world backend.

---

### 📚 **What I Learned**

During this week, I explored and implemented the following concepts:

1. **Node.js Fundamentals**

   * Setting up a Node.js project with `npm`
   * Understanding `package.json` and using `nodemon` for auto-restart

2. **Express Basics**

   * Creating a basic Express server
   * Handling routes using `app.get()` and `app.post()`

3. **Routing & Middleware**

   * Created a dedicated `routes` folder
   * Used custom middleware for logging and debugging

4. **Controllers & Modularity**

   * Moved route logic into separate `controller` files
   * Followed the MVC-like structure for cleaner code organization

5. **HTTP Methods (CRUD)**

   * Implemented all four methods: `GET`, `POST`, `PUT`, and `DELETE`
   * Built CRUD functionality for a simple in-memory “Tasks” API

6. **Environment Variables**

   * Used the `dotenv` package to manage app configuration
   * Loaded environment variables securely using `.env`

7. **Error Handling & REST Structure**

   * Added a centralized `errorHandler` middleware
   * Designed a REST-style folder structure (`routes`, `controllers`, `middlewares`)

---

### 💡 **Mini Project: Task API**

A simple RESTful API built with **Express.js**, demonstrating CRUD operations for managing tasks.

**Features:**

* Create, Read, Update, and Delete tasks
* Modular architecture using `controllers` and `routes`
* Environment configuration using `.env`
* Error handling middleware for consistent responses

**Tech Stack:**

* Node.js
* Express.js
* Dotenv
* Nodemon (Dev)

**Run Locally:**

```bash
npm install
npm run dev
```

---

### 🧠 **Key Takeaways**

* Express makes backend development faster and cleaner.
* Modular structure keeps code organized and scalable.
* Understanding HTTP methods is the foundation of REST APIs.
* `.env` files are essential for secure configuration.
* Centralized error handling simplifies debugging.

---

### 🚀 **Next Week (Week 2 Preview)**

**Focus:** MongoDB Integration + Express API

* Connect Express API to MongoDB
* Learn Mongoose
* Build database models and schemas
* CRUD with real database

---

