
# 📘 Git & GitHub Complete Guide  

## 1. What is Git & GitHub?  
### Git  
- **Definition** → Git ek **Version Control System (VCS)** hai jo tumhare code ka pura history save karta hai.  
- **Features**:  
  - Track changes  
  - Rollback to old versions  
  - Work with multiple branches  
  - Collaborate with teams  

### GitHub  
- **Definition** → GitHub ek **cloud platform** hai jaha tum apna Git repository host aur manage kar sakte ho.  
- **Features**:  
  - Store repositories online  
  - Team collaboration (Pull Requests, Issues)  
  - CI/CD (GitHub Actions)  
  - Open-source community  

👉 Simple Example:  
- **Git** = Local diary jaha tum apne changes likhte ho.  
- **GitHub** = Online diary jise tum friends ke sath share karte ho.  

---

## 2. Git Installation & Setup  
### Install Git  
- **Linux**  
  ```bash
  sudo apt update
  sudo apt install git
  ```  
- **Windows** → [Download Git](https://git-scm.com/download/win)  
- **Mac**  
  ```bash
  brew install git
  ```  

### Verify Installation  
```bash
git --version
```

### Configure Git  
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --list
```

---

## 3. Git Basics  
### Create Repository  
```bash
git init
```

### Clone Repository  
```bash
git clone <repo-url>
```

### Add & Commit Changes  
```bash
git add .
git commit -m "Added new feature"
```

### Check Status  
```bash
git status
```

### View History  
```bash
git log
```

---

## 4. Branching in Git  
Branches = Parallel copies of project.  

### Create Branch  
```bash
git branch feature-1
```

### Switch Branch  
```bash
git checkout feature-1
```

### Merge Branch  
```bash
git checkout main
git merge feature-1
```

### Delete Branch  
```bash
git branch -d feature-1
```

---

## 5. GitHub Remote Commands  
### Add Remote Repository  
```bash
git remote add origin <repo-url>
```

### Push Code to GitHub  
```bash
git push -u origin main
```

### Pull Code from GitHub  
```bash
git pull origin main
```

### View Remote  
```bash
git remote -v
```

---

## 6. Collaboration with GitHub  
- **Fork** → Apne account me repo ka copy banana.  
- **Clone** → Repo ko apne computer pe download karna.  
- **Pull Request (PR)** → Changes ko main repo owner ko bhejna.  
- **Issues** → Bug ya feature request report karna.  

---

## 7. Stashing in Git  
Kabhi urgent branch change karna ho aur tumhare changes ready na ho:  

```bash
git stash        # save work
git stash list   # see saved work
git stash pop    # restore work
```

---

## 8. Undoing Mistakes  
### Discard File Changes  
```bash
git checkout -- <file>
```

### Undo Last Commit  
```bash
git reset HEAD~1
```

### Revert Commit (safe way)  
```bash
git revert <commit-id>
```

---

## 9. Git Ignore  
Unwanted files ko track hone se bachao → `.gitignore` file me likho.  

Example `.gitignore`  
```
node_modules/
dist/
.env
```

---

## 10. GitHub Features  
- **GitHub Actions** → CI/CD automation (tests, deployments)  
- **Projects** → Task management board (like Trello)  
- **Wiki** → Documentation pages  
- **Security** → Dependabot, vulnerability alerts  

---

## 11. Advanced Git  
### Rebase (Clean History)  
```bash
git rebase main
```

### Cherry-pick (Pick specific commit)  
```bash
git cherry-pick <commit-id>
```

### Tags (Releases)  
```bash
git tag v1.0
git push origin v1.0
```

---

## 12. Best Practices  
- Small, meaningful commits  
- Always pull before pushing  
- Use feature branches  
- Keep `.gitignore` updated  
- Write clear PR descriptions  

---

## 13. Useful Git Commands (Quick Reference)  
```bash
git init                # create repo
git clone <url>         # copy repo
git add .               # stage changes
git commit -m "msg"     # commit changes
git push                # upload to GitHub
git pull                # download from GitHub
git status              # check status
git log                 # see history
git branch              # list branches
git checkout <branch>   # switch branch
```

---

## 14. Learning Resources  
- [Pro Git Book](https://git-scm.com/book/en/v2)  
- [GitHub Docs](https://docs.github.com/)  
- [Git Cheatsheet PDF](https://education.github.com/git-cheat-sheet-education.pdf)  
