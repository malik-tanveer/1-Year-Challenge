# Firebase Setup Guide

This guide will help you set up Firebase for the Admin Dashboard application.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "admin-dashboard")
4. (Optional) Enable Google Analytics
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, click on "Authentication" in the left sidebar
2. Click "Get started"
3. Click on "Sign-in method" tab
4. Enable "Email/Password" provider:
   - Click on "Email/Password"
   - Toggle "Enable" switch
   - Click "Save"

## Step 3: Create Firestore Database

1. Click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Click "Enable"

## Step 4: Set Up Firestore Security Rules

1. In Firestore Database, click on "Rules" tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      // Anyone authenticated can read user data
      allow read: if request.auth != null;
      
      // Users can only update their own data, or admins can update any
      allow write: if request.auth != null && 
                   (request.auth.uid == userId || 
                    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin');
    }
    
    // Products collection (Admin only)
    match /products/{productId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                   get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }
  }
}
```

3. Click "Publish"

## Step 5: Get Firebase Configuration

1. Click on the gear icon (⚙️) next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click on the web icon (</>) to add a web app
5. Register your app with a nickname (e.g., "Admin Dashboard Web")
6. Copy the Firebase configuration object

## Step 6: Update Your Project

1. Open `src/config/firebase.ts` in your project
2. Replace the configuration with your Firebase credentials:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 7: Test Your Setup

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the signup page
3. Create a test account with Admin role
4. Verify you can:
   - Sign up successfully
   - Login with your credentials
   - Access all pages as Admin
   - Create and manage products

## Step 8: Create Test Users

### Create an Admin User:
1. Go to `/signup`
2. Fill in:
   - Name: Admin User
   - Email: admin@example.com
   - Password: admin123
   - Role: Admin
3. Click "Sign Up"

### Create a Regular User:
1. Logout
2. Go to `/signup`
3. Fill in:
   - Name: Regular User
   - Email: user@example.com
   - Password: user123
   - Role: User
4. Click "Sign Up"

## Testing Role-Based Access

### As Admin:
- ✅ Can access Dashboard
- ✅ Can view Users page
- ✅ Can add/edit/delete users
- ✅ Can access Products page
- ✅ Can add/edit/delete products
- ✅ Can access Settings

### As Regular User:
- ✅ Can access Dashboard
- ✅ Can view Users page (read-only)
- ❌ Cannot add/edit/delete users
- ❌ Cannot access Products page (redirected)
- ✅ Can access Settings

## Troubleshooting

### Error: "Firebase: Error (auth/configuration-not-found)"
- Make sure you've enabled Email/Password authentication
- Verify your Firebase config is correct

### Error: "Missing or insufficient permissions"
- Check your Firestore security rules
- Make sure the rules are published

### Users not appearing in Firestore
- Check that Firestore is enabled
- Verify the database is in the correct region
- Check browser console for errors

### Authentication not working
- Clear browser cache and cookies
- Check Firebase Authentication is enabled
- Verify API key is correct

## Production Deployment

### Update Security Rules for Production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
                    (request.auth.uid == userId || 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin');
      allow delete: if request.auth != null && 
                    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }
    
    match /products/{productId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                   get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }
  }
}
```

### Enable App Check (Recommended):
1. Go to Firebase Console
2. Click "App Check" in the left sidebar
3. Register your app
4. Enable reCAPTCHA v3 for web apps

## Additional Features

### Email Verification (Optional):
Add to `AuthContext.tsx` after signup:
```typescript
import { sendEmailVerification } from 'firebase/auth';

// After creating user
await sendEmailVerification(userCredential.user);
```

### Password Reset (Optional):
Add to Login page:
```typescript
import { sendPasswordResetEmail } from 'firebase/auth';

const handlePasswordReset = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};
```

## Support

For more information:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)

---

**Note:** Keep your Firebase credentials secure and never commit them to public repositories. Use environment variables for production deployments.
