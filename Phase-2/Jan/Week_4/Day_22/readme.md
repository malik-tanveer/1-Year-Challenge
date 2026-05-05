
# 🚀 Complete GitHub Workflow Guide (Beginner to Pro)

This guide explains **how to create a GitHub repository**, **push code**, **use branches**, **merge features**, and **clean up branches** — using **Git CLI** and **GitHub Desktop**.

---

## 📌 1. What is Git & GitHub?

**Git**  
A version control system that tracks changes in your code.

**GitHub**  
An online platform to store Git repositories and collaborate.

👉 Rule of thumb:
- Git = local (your laptop)
- GitHub = remote (cloud)

---

## 📁 2. Create a New GitHub Repository

1. Go to GitHub → New Repository  
2. Repository name: `my-project`
3. Select **Public**
4. ❌ Do NOT add README (we will push locally)
5. Click **Create Repository**

---

## 💻 3. Initialize Project & Push Code (Git CLI)

```bash
# go to your project folder
git init

# check status
git status

# add files
git add .

# commit
git commit -m "initial project setup"

# connect GitHub repo
git branch -M main
git remote add origin https://github.com/USERNAME/my-project.git

# push to GitHub
git push -u origin main
```

✅ Your code is now live on GitHub

---

## 🌿 4. What is a Branch?

A **branch** is an isolated workspace.

- `main` → stable / production
- `feature-*` → new features

You NEVER directly work on `main`.

---

## 🧩 5. Create a Feature Branch (Git CLI)

Example: Add Login Page

```bash
git checkout -b feature-login
```

Now:
- You are on `feature-login`
- `main` is safe

Make changes → then:

```bash
git add .
git commit -m "add login page"
git push origin feature-login
```

---

## 🔀 6. Merge Feature Branch into Main (Git CLI)

```bash
# switch to main
git checkout main

# pull latest
git pull origin main

# merge feature
git merge feature-login

# push updated main
git push origin main
```

---

## 🧹 7. Delete Feature Branch (After Merge)

```bash
# delete local branch
git branch -d feature-login

# delete remote branch
git push origin --delete feature-login
```

---

## 🖥️ 8. Same Workflow Using GitHub Desktop

### A. Clone Repo
- Open GitHub Desktop
- File → Clone Repository

### B. Create Branch
- Click **Current Branch**
- New Branch → `feature-dashboard`

### C. Commit Changes
- Make code changes
- Write message → Commit

### D. Push Branch
- Click **Publish Branch**

### E. Merge
- Switch to `main`
- Branch → Merge into current branch

### F. Delete Branch
- Branch → Delete

---

## 🏗️ 9. Real-World Workflow

1. main → stable
2. feature-login → merge → delete
3. feature-dashboard → merge → delete
4. feature-docker → merge → delete

🚀 Only **main** is deployed

---

## ⚠️ Important Rules

- ❌ Never deploy feature branches
- ✅ Always deploy main
- ✅ One feature = one branch
- ✅ Delete branch after merge

---

## 🧠 Interview Answer

> I follow a feature-branch workflow where each feature is developed in isolation and merged into main after testing. Only the stable main branch is deployed.

---

## 🎯 Summary

✔ Clean history  
✔ Safe development  
✔ Industry standard  
✔ Works for solo & teams  

---
