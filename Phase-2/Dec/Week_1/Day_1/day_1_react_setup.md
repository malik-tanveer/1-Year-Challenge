---
# Day 1 — React Project Setup & Installation

## **Goal:**
Setup a React project environment using different methods and get ready to start development.

---

## **1. Prerequisites**
Before creating a React project, make sure you have:

- **Node.js & npm** installed
  - Check installation: `node -v` and `npm -v`
  - Install from [Node.js official website](https://nodejs.org/)
- **Code Editor** (VS Code recommended)
- **Terminal / Command Prompt**
- **Internet connection** for downloading packages

---

## **2. Methods to Create a React Project**

### **Method 1: Using Vite (Recommended)**
Vite is a fast modern build tool for React projects.

```bash
# Create a new project
npm create vite@latest my-react-app

# Navigate into project folder
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

**Notes:**
- Vite automatically sets up React and JSX support.
- You can choose TypeScript or JavaScript during setup.

---

### **Method 2: Using Create React App (CRA)**
Classic method, more boilerplate, slower build.

```bash
# Create React app
npx create-react-app my-app

# Navigate into project folder
cd my-app

# Start development server
npm start
```

**Notes:**
- Good for beginners, lots of online tutorials
- Slower than Vite for modern development

---

### **Method 3: Using Yarn**
Alternative package manager to npm.

```bash
# Create project with Vite using Yarn
yarn create vite my-react-app
cd my-react-app
yarn
yarn dev
```

**Notes:**
- Yarn is faster in some cases
- Works similar to npm commands

---

## **3. Folder Structure (Typical Vite React Project)**
```
my-react-app/
├─ node_modules/
├─ public/
│  └─ index.html
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ assets/
├─ package.json
├─ vite.config.js
└─ README.md
```

**Key Files:**
- `App.jsx` → Main component
- `main.jsx` → Entry point for React
- `package.json` → Lists dependencies and scripts

---

## **4. Recommended Extensions & Tools**
- **VS Code Extensions:** ESLint, Prettier, React Developer Tools
- **Browser:** Chrome / Firefox with React DevTools
- **Optional:** TailwindCSS, Bootstrap, or other UI libraries

---

## **5. Next Steps After Setup**
- Run the dev server: `npm run dev` or `npm start`
- Open browser at the local URL (usually `http://localhost:5173/` for Vite)
- Start creating components in `src/`
- Setup routing using `react-router-dom`

---

## **6. Notes / Tips**
- Always keep Node.js updated
- Use version control (Git + GitHub) from day 1
- Vite is recommended for faster development
- Explore folder structure and try small component changes to see hot reload in action

