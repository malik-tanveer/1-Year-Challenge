# Day 1 — What is Next.js & App Router

**Date:** March 16, 2026

## Overview

Today I started learning **Next.js** and focused on understanding what Next.js is and how the **App Router** works. I also created my first project and explored the concept of **file-based routing**.

---

## What is Next.js

Next.js is a **React framework** used to build modern web applications.
It provides features that React alone does not include by default.

Some important features of Next.js:

* File-based routing
* Server-Side Rendering (SSR)
* Static Site Generation (SSG)
* API routes
* Built-in performance optimization
* SEO friendly structure

Next.js helps developers build **fast, scalable, and production-ready web applications**.

---

## App Router

Next.js uses the **App Router system** located inside the `app` folder.

The App Router allows developers to create routes simply by creating folders and files.
Each folder represents a route and the `page.js` file represents the UI for that route.

Example structure:

```
app/
 ├ page.js
 ├ about/
 │   └ page.js
 └ contact/
     └ page.js
```

Routes generated from this structure:

```
/        → Home Page
/about   → About Page
/contact → Contact Page
```

---

## File-Based Routing

Next.js automatically creates routes based on the folder structure.

For example:

```
app/blog/page.js
```

Creates this route:

```
/blog
```

And

```
app/blog/post/page.js
```

Creates this route:

```
/blog/post
```

This system makes routing **simple and organized**.

---

## Project Creation

I created a Next.js project using:

```bash
npx create-next-app@latest nextjs-learning
```

Then started the development server:

```bash
cd nextjs-learning
npm run dev
```

The project runs on:

```
http://localhost:3000
```

---

## What I Practiced

* Creating a Next.js project
* Understanding the `app` folder
* Exploring the App Router system
* Learning file-based routing

---

## Key Takeaway

Next.js simplifies routing and improves performance by providing built-in features like the App Router, server rendering, and optimized project structure.

---
