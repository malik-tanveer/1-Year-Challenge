# Full Admin Dashboard App

A complete, production-ready Admin Dashboard application built with React, TypeScript, TailwindCSS, Formik, Yup, and Firebase Authentication. Features role-based access control, responsive design, and full CRUD operations.

## 🚀 Features

### 🔐 Authentication System
- **Firebase Authentication** - Secure user authentication
- **Sign Up / Login** - Complete registration and login flow
- **Role-Based Access** - Admin and User roles with different permissions
- **Protected Routes** - Automatic redirection for unauthorized users
- **Session Persistence** - Stay logged in across browser sessions
- **User Profile** - Display user info with logout functionality

### 👥 User Management
- **User Table** - View all users with Name, Email, and Role
- **Add User (Admin Only)** - Create new users with Formik validation
- **Edit/Delete Users** - Manage user accounts
- **Role Assignment** - Assign Admin or User roles

### 📦 Products Management (Admin Only)
- **Product CRUD** - Full Create, Read, Update, Delete operations
- **Product Details** - Name, Price, Category, Description, Image
- **Form Validation** - Real-time validation with Yup
- **Image Support** - Product images with URL input
- **Category Management** - Organized product categories

### 📊 Dashboard
- **Statistics Cards** - Total Users, Orders, Revenue, Growth
- **Trend Indicators** - Visual percentage changes
- **Recent Activity** - Timeline of recent events
- **Quick Stats** - Important metrics at a glance
- **Responsive Grid** - Adapts to all screen sizes

### ⚙️ Settings
- **Theme Toggle** - Switch between light and dark modes
- **Language Selection** - Multiple language options
- **Notification Preferences** - Push and email notifications
- **Account Management** - Profile and password settings

### 🎨 UI/UX Features
- **Collapsible Sidebar** - Minimizable navigation on desktop
- **Mobile Responsive** - Fully functional on all devices
- **Dark/Light Mode** - Complete theme support with persistence
- **Modern Design** - Clean, professional interface
- **Smooth Animations** - Polished transitions and effects
- **Loading States** - Visual feedback for async operations

### 🧩 Reusable Components
- **Button** - Multiple variants and sizes
- **Card** - Container component with consistent styling
- **Modal** - Dialog component with backdrop
- **Input** - Form input with error handling
- **Table** - Data table with custom rendering
- **Sidebar** - Navigation with role-based filtering
- **Navbar** - Top bar with user menu

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Firebase** - Authentication and Firestore database
- **React Router DOM** - Client-side routing
- **Formik** - Advanced form management
- **Yup** - Schema validation
- **React Icons** - Comprehensive icon library
- **Vite** - Lightning-fast build tool

## 📦 Installation

### Prerequisites
- Node.js 16+ installed
- Firebase account (free tier works)

### Steps

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Configure Firebase:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Copy your Firebase config

3. **Update Firebase configuration:**
   - Open `src/config/firebase.ts`
   - Replace the config object with your Firebase credentials:
   ```typescript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Start development server:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
```

## 🎯 Project Structure

```
src/
├── components/
│   ├── Button.tsx              # Reusable button component
│   ├── Card.tsx                # Card container
│   ├── Input.tsx               # Form input component
│   ├── Modal.tsx               # Modal dialog
│   ├── Table.tsx               # Data table
│   ├── StatCard.tsx            # Statistics card
│   ├── Sidebar.tsx             # Collapsible sidebar
│   ├── Navbar.tsx              # Top navigation
│   ├── Layout.tsx              # Main layout wrapper
│   └── ProtectedRoute.tsx      # Route protection HOC
├── pages/
│   ├── Login.tsx               # Login page
│   ├── Signup.tsx              # Registration page
│   ├── Dashboard.tsx           # Main dashboard
│   ├── Users.tsx               # User management
│   ├── Products.tsx            # Product management (Admin)
│   └── Settings.tsx            # Settings page
├── context/
│   ├── AuthContext.tsx         # Authentication state
│   └── ThemeContext.tsx        # Theme state
├── config/
│   └── firebase.ts             # Firebase configuration
├── App.tsx                     # Main app with routing
├── main.tsx                    # App entry point
└── index.css                   # Global styles
```

## 🔑 Usage Guide

### First Time Setup

1. **Create an Admin Account:**
   - Navigate to `/signup`
   - Fill in your details
   - Select "Admin" as role
   - Click "Sign Up"

2. **Login:**
   - Go to `/login`
   - Enter your credentials
   - You'll be redirected to the dashboard

### Admin Features

**Admins can:**
- View and manage all users
- Add new users with any role
- Access the Products page
- Create, edit, and delete products
- View all dashboard statistics
- Change settings

### User Features

**Regular users can:**
- View the dashboard
- See user list (view only)
- Access settings
- Update their preferences
- Cannot access Products page
- Cannot add/edit/delete users or products

### Navigation

- **Dashboard** - Overview with statistics
- **Users** - User management (Admin can add/edit)
- **Products** - Product CRUD (Admin only)
- **Settings** - Preferences and account settings

### Mobile Usage

- Tap the menu icon (☰) to open sidebar
- Tap outside sidebar to close
- All features work on mobile
- Responsive tables and forms

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add custom colors
    }
  }
}
```

### Adding New Pages

1. Create page in `src/pages/`
2. Add route in `App.tsx`
3. Add navigation link in `Sidebar.tsx`
4. Wrap with `ProtectedRoute` if needed

### Firebase Rules

Set up Firestore security rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId 
                   || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }
  }
}
```

## 🔒 Security Features

- **Protected Routes** - Unauthorized users redirected to login
- **Role-Based Access** - Admin-only routes and features
- **Firebase Auth** - Secure authentication system
- **Input Validation** - All forms validated with Yup
- **XSS Protection** - React's built-in protection
- **HTTPS** - Use HTTPS in production

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

Sidebar collapses on mobile, full features on all devices.

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify your Firebase config is correct
- Check Firebase console for enabled services
- Ensure Firestore and Auth are activated

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dark Mode Not Persisting
- Check localStorage is enabled in browser
- Clear browser cache

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 📝 Environment Variables

Create `.env` file for sensitive data:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
# Add other Firebase config
```

Update `firebase.ts` to use env variables:
```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ...
};
```

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Firebase for authentication services
- TailwindCSS for the utility-first CSS
- Formik & Yup for form management
- React Icons for the icon library

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check existing documentation
- Review Firebase documentation

---

**Built with ❤️ using React, TypeScript, and TailwindCSS**
