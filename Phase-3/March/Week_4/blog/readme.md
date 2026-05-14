# Blog Project Documentation & Setup Guide

This document provides a complete overview of the Blog Project, including architecture, installation, development workflows, and deployment details.

## Project Overview
The Blog Project is a full-stack web application that enables users to write, manage, and share blog posts. It combines a modern React-based frontend with a RESTful backend API to support a smooth authoring and reading experience.

Key capabilities:
- User registration and login with secure authentication
- Create, read, update, and delete blog posts
- Commenting and engagement on published posts
- Responsive design for desktop and mobile devices
- Search and filter posts by keywords
- Role-aware access control for regular users and admins

## Architecture
The project is structured as a frontend and backend application:
- Frontend: Next.js with React and Tailwind CSS for UI components and page rendering.
- Backend: Node.js and Express.js providing REST API endpoints.
- Database: MongoDB for storing users, posts, comments, and metadata.
- Authentication: JWT tokens to secure API requests and manage session state.

Frontend and backend communicate over HTTP. The frontend handles page rendering, user interactions, and form validation, while the backend handles data persistence, authentication, and business logic.

## Features
- User registration and authentication
- Secure login with JWT token management
- Create, edit, delete personal blog posts
- Commenting system for user interaction
- Search posts by title, tags, or content
- Responsive layout for multiple screen sizes
- Admin dashboard for user and post management
- Form validation and error handling

## Project Structure
A typical project structure may include:
- `frontend/` - Next.js application with pages, components, and styles
- `backend/` - Express API with routes, controllers, and middleware
- `models/` - Mongoose schemas for users, posts, and comments
- `controllers/` - Request handlers for API operations
- `routes/` - API routes organized by resource
- `middleware/` - Authentication and validation middleware
- `config/` - Environment and database configuration

## Installation
1. Clone the repository:
   - `git clone <repository-url>`
2. Install dependencies for the backend:
   - `cd backend`
   - `npm install`
3. Install dependencies for the frontend:
   - `cd ../frontend`
   - `npm install`

## Configuration
Create environment variable files for both backend and frontend.

Backend example `.env`:
- `PORT=5000`
- `MONGODB_URI=<your-mongodb-connection-string>`
- `JWT_SECRET=<secure-secret>`
- `JWT_EXPIRES_IN=7d`

Frontend example `.env.local`:
- `NEXT_PUBLIC_API_URL=http://localhost:5000/api`

## Running the Project
### Backend
1. Start the backend server:
   - `cd backend`
   - `npm run dev`
2. Confirm the API is running at `http://localhost:5000/api`

### Frontend
1. Start the frontend:
   - `cd frontend`
   - `npm run dev`
2. Open the app in the browser at `http://localhost:3000`

## API Endpoints
Common backend endpoints include:
- `POST /api/auth/register` - Register new users
- `POST /api/auth/login` - Authenticate users and issue JWT
- `GET /api/posts` - Fetch published posts
- `GET /api/posts/:id` - Fetch a single post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update an existing post
- `DELETE /api/posts/:id` - Delete a post
- `POST /api/posts/:id/comments` - Add a comment to a post

Protected routes require a valid JWT in the `Authorization` header.

## Authentication
The application uses JWT-based authentication:
- On login, the server returns a signed token.
- The frontend stores the token and includes it in API requests.
- Middleware validates the token and extracts the user identity for protected operations.

## Deployment
- Frontend can be deployed on Vercel or similar hosting platforms.
- Backend can be deployed on Heroku, Render, or any Node.js host.
- Ensure environment variables are configured for production.
- Use a managed MongoDB service or production-ready database host.

## Usage
- Sign up as a new user.
- Create and publish blog posts.
- Edit or delete posts created by the logged-in user.
- Comment on published posts.
- Use the search feature to find content.
- Admin users can manage site content and user accounts.

## Contribution
To contribute:
- Fork the repository
- Create a feature branch
- Commit changes with clear messages
- Submit a pull request

## Notes
- Ensure MongoDB is running before starting the backend.
- Keep JWT secrets private and secure.
- Validate user input on both client and server sides.
- Review logs for runtime or API errors during development.
