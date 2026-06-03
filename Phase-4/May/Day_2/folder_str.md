
# Angular Project Structure

When you create a new Angular project:

```bash
ng new my-app
```

You will see something like:

```txt
my-app/
│
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   │
│   ├── styles.css
│   ├── index.html
│   └── main.ts
│
├── node_modules/
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

# Important Folders & Files

## `src/`

Main application source code.

```txt
src/
```

Everything you build is usually inside this folder.

---

## `app/`

Contains your Angular application code.

```txt
src/app/
```

Example:

```txt
app/
├── pages/
├── components/
├── services/
├── shared/
└── app.routes.ts
```

---

## `app.component.ts`

Root component of the application.

```ts
export class AppComponent {
  title = 'my-app';
}
```

Think of it like:

```jsx
App.jsx
```

in React.

---

## `app.routes.ts`

Application routing.

```ts
export const routes = [
  {
    path: '',
    component: HomeComponent
  }
];
```

Similar to React Router configuration.

---

## `assets/`

Stores static files.

```txt
assets/
├── images/
├── icons/
└── fonts/
```

---

## `styles.css`

Global styles.

```css
body {
  margin: 0;
}
```

Works like global CSS.

---

## `main.ts`

Application entry point.

```ts
bootstrapApplication(AppComponent);
```

Similar idea to:

```jsx
ReactDOM.createRoot(...)
```

in React.

---

# Recommended Folder Structure

For real projects:

```txt
src/
└── app/
    ├── pages/
    │   ├── dashboard/
    │   ├── users/
    │   └── posts/
    │
    ├── components/
    │   ├── navbar/
    │   ├── sidebar/
    │   └── footer/
    │
    ├── services/
    │   ├── auth.service.ts
    │   ├── user.service.ts
    │   └── post.service.ts
    │
    ├── guards/
    │
    ├── models/
    │
    ├── shared/
    │
    └── app.routes.ts
```

This structure works well for Admin Panels and large applications.

---

# Install Angular CLI

First install Angular CLI globally:

```bash
npm install -g @angular/cli
```

Check installation:

```bash
ng version
```

---

# Create Angular Project

```bash
ng new my-app
```

Angular will ask some questions.

You can usually choose:

```txt
✔ CSS
✔ Routing = Yes
```

Move into project:

```bash
cd my-app
```

---

# Run Angular Project

Start development server:

```bash
ng serve
```

or

```bash
ng serve --open
```

Then open:

```txt
http://localhost:4200
```

---

# Generate Component

Create a component:

```bash
ng generate component home
```

Shortcut:

```bash
ng g c home
```

Angular creates:

```txt
home/
├── home.component.ts
├── home.component.html
├── home.component.css
└── home.component.spec.ts
```

---

# Generate Service

Create a service:

```bash
ng generate service services/user
```

Shortcut:

```bash
ng g s services/user
```

Creates:

```txt
services/
├── user.service.ts
└── user.service.spec.ts
```
