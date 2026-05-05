# Quick Start Guide

Get your Admin Dashboard up and running in 5 minutes!

## ⚡ Quick Setup

### 1. Install Dependencies (Already Done ✓)
```bash
npm install
```

### 2. Configure Firebase

**Option A: Use Demo Mode (No Firebase Required)**
The app will work locally without Firebase, but authentication won't persist. Perfect for testing the UI!

**Option B: Set Up Firebase (Recommended)**

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Email/Password authentication
3. Create a Firestore database
4. Copy your config from Project Settings
5. Update `src/config/firebase.ts` with your credentials

📖 **Detailed instructions:** See `FIREBASE_SETUP.md`

### 3. Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5174` (or another port if 5174 is busy)

## 🎯 First Steps

### Without Firebase (Demo Mode)
1. Navigate to `/login`
2. The app will show the login UI
3. You can explore all pages and UI components
4. Data won't persist (stored in memory only)

### With Firebase
1. Go to `/signup`
2. Create an admin account:
   - Name: Your Name
   - Email: admin@test.com
   - Password: admin123
   - Role: **Admin**
3. Click "Sign Up"
4. You'll be logged in automatically!

## 🚀 What You Can Do

### As Admin (Full Access)
- ✅ View dashboard with statistics
- ✅ Manage users (add, edit, delete)
- ✅ Manage products (add, edit, delete)
- ✅ Change settings and preferences
- ✅ Toggle dark/light theme
- ✅ Access all pages

### As Regular User (Limited Access)
- ✅ View dashboard
- ✅ View users (read-only)
- ❌ Cannot manage users
- ❌ Cannot access products page
- ✅ Change own settings

## 📱 Testing Responsive Design

### Desktop View
- Sidebar always visible
- Full width layout
- All features accessible

### Mobile View
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Select a mobile device
4. Click menu icon (☰) to open sidebar
5. Tap outside to close

### Test Dark Mode
1. Click sun/moon icon in navbar
2. Theme switches instantly
3. Refresh page - theme persists!

## 🎨 Key Features to Test

### 1. Authentication Flow
- Sign up with different roles
- Login/logout
- Protected routes (try accessing `/products` as User)

### 2. User Management
- Add a new user (Admin only)
- Edit user details
- Delete a user
- Notice role-based buttons

### 3. Product Management (Admin Only)
- Add a product with image URL
- Edit product details
- Delete a product
- Try different categories

### 4. Settings
- Toggle dark mode
- Change language preference
- Toggle notifications
- Click "Save Settings"

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using the port
npx kill-port 5174

# Or let Vite choose another port automatically
npm run dev
```

### Firebase Errors
If you see Firebase errors:
1. Check `src/config/firebase.ts` has correct credentials
2. Verify Firebase Authentication is enabled
3. Ensure Firestore is created
4. See `FIREBASE_SETUP.md` for detailed steps

### Build Errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dark Mode Not Working
- Clear browser localStorage
- Hard refresh (Ctrl+Shift+R)

## 📚 Documentation

- **README.md** - Complete project documentation
- **FIREBASE_SETUP.md** - Step-by-step Firebase configuration
- **FEATURES.md** - Detailed feature documentation
- **QUICKSTART.md** - This file!

## 🎯 Next Steps

### 1. Customize the App
- Change colors in `tailwind.config.js`
- Update branding in `Sidebar.tsx`
- Add your logo

### 2. Add More Features
- Email verification
- Password reset
- User profiles
- Analytics dashboard
- Export data functionality

### 3. Deploy to Production
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod
```

## 💡 Tips

### Development
- Use React DevTools for debugging
- Check browser console for errors
- Use TypeScript for type safety

### Testing Users
Create these test accounts:
- **Admin:** admin@test.com / admin123
- **User:** user@test.com / user123
- **Manager:** manager@test.com / manager123

### Sample Product Data
```javascript
{
  name: "Laptop Pro",
  price: 1299.99,
  category: "Electronics",
  description: "High-performance laptop",
  image: "https://via.placeholder.com/150"
}
```

## 🔥 Hot Tips

1. **Sidebar Toggle:** Click menu icon on mobile
2. **Quick Logout:** Click profile icon → Logout
3. **Theme Toggle:** Click sun/moon icon
4. **Form Validation:** Errors show in real-time
5. **Modal Close:** Click outside or press ESC

## 📞 Need Help?

- Check the documentation files
- Review Firebase setup guide
- Check browser console for errors
- Verify all dependencies installed

## 🎉 You're Ready!

Your admin dashboard is now running. Explore the features, test the authentication, and customize it to your needs!

**Happy coding! 🚀**

---

**Pro Tip:** Open the app in two browsers - one as Admin, one as User - to see the different access levels in action!
