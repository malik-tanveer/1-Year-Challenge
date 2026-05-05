# Blog API with JWT Authentication

A complete REST API for a Blog application built with Node.js, Express, MongoDB, and JWT.

## Features
- User Registration & Login (JWT)
- Create, Read, Update, Delete Blog Posts
- Image Upload (local storage)
- Protected Routes (only authenticated users)
- Only author can update/delete their posts
- Input Validation
- Error Handling

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- Multer for file upload

## API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Posts
- GET `/api/posts` → Get all posts
- POST `/api/posts` → Create post (protected + image)
- PUT `/api/posts/:id` → Update post (owner only)
- DELETE `/api/posts/:id` → Delete post (owner only)

## Setup
1. `npm install`
2. Create `.env` file with `JWT_SECRET` and `MONGO_URI`
3. `npm start`
