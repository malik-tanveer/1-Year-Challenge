# Testing Checklist

Use this checklist to verify all features are working correctly.

## 🔧 Setup Verification

- [ ] Development server is running (`npm run dev`)
- [ ] No console errors in browser
- [ ] App loads at http://localhost:5174 (or assigned port)
- [ ] Firebase config updated (if using Firebase)

## 🔐 Authentication Tests

### Sign Up
- [ ] Navigate to `/signup`
- [ ] Form displays correctly
- [ ] All fields are present (Name, Email, Password, Confirm Password, Role)
- [ ] Validation works (try invalid email, short password)
- [ ] Error messages display in red
- [ ] Can select Admin or User role
- [ ] Submit button disabled during submission
- [ ] Success: Redirects to dashboard
- [ ] User data appears in navbar

### Login
- [ ] Navigate to `/login`
- [ ] Form displays correctly
- [ ] Email and Password fields present
- [ ] Validation works
- [ ] Error shows for wrong credentials
- [ ] Success: Redirects to dashboard
- [ ] "Sign up" link works

### Logout
- [ ] Click profile icon in navbar
- [ ] Dropdown shows user info (Name, Email, Role)
- [ ] Click "Logout" button
- [ ] Redirects to login page
- [ ] Cannot access protected routes after logout

## 🛡️ Role-Based Access Tests

### As Admin
- [ ] Can see Dashboard in sidebar
- [ ] Can see Users in sidebar
- [ ] Can see Products in sidebar
- [ ] Can see Settings in sidebar
- [ ] Can access `/products` page
- [ ] "Add User" button visible on Users page
- [ ] "Add Product" button visible on Products page
- [ ] Edit/Delete buttons visible in tables

### As Regular User
- [ ] Can see Dashboard in sidebar
- [ ] Can see Users in sidebar
- [ ] Products NOT in sidebar
- [ ] Can see Settings in sidebar
- [ ] Redirected when accessing `/products`
- [ ] "Add User" button NOT visible
- [ ] Edit/Delete buttons NOT visible in Users table

## 📊 Dashboard Tests

- [ ] Page loads without errors
- [ ] 4 stat cards display (Users, Orders, Revenue, Growth)
- [ ] Each card shows icon, title, value, and trend
- [ ] Cards have different colors (blue, green, purple, orange)
- [ ] Recent Activity section displays
- [ ] Quick Stats section displays
- [ ] Responsive on mobile (2 columns → 1 column)

## 👥 Users Page Tests

### View Users
- [ ] Table displays with columns: Name, Email, Role, Actions
- [ ] Sample users are visible
- [ ] Table is responsive
- [ ] Hover effects work on rows

### Add User (Admin Only)
- [ ] "Add User" button visible (Admin only)
- [ ] Click opens modal
- [ ] Form has Name, Email, Role fields
- [ ] Validation works (try empty fields)
- [ ] Error messages display
- [ ] Can select role from dropdown
- [ ] Submit adds user to table
- [ ] Modal closes after success
- [ ] New user appears in table

### Edit User (Admin Only)
- [ ] Edit icon visible in Actions column
- [ ] Click opens modal with current data
- [ ] Can modify all fields
- [ ] Submit updates user in table
- [ ] Changes reflect immediately

### Delete User (Admin Only)
- [ ] Delete icon visible in Actions column
- [ ] Click shows confirmation dialog
- [ ] Confirm removes user from table
- [ ] User disappears immediately

## 📦 Products Page Tests (Admin Only)

### Access Control
- [ ] Admin can access `/products`
- [ ] User redirected to dashboard
- [ ] Products link only in Admin sidebar

### View Products
- [ ] Table displays with columns: Image, Name, Price, Category, Description, Actions
- [ ] Sample products visible
- [ ] Images display correctly
- [ ] Prices formatted as currency ($XX.XX)
- [ ] Description truncated if long
- [ ] Table is responsive

### Add Product
- [ ] "Add Product" button visible
- [ ] Click opens modal
- [ ] Form has all fields (Name, Price, Category, Description, Image)
- [ ] Validation works:
  - [ ] Name required (min 2 chars)
  - [ ] Price required (positive number)
  - [ ] Category required
  - [ ] Description required (min 10 chars)
  - [ ] Image URL required (valid URL)
- [ ] Can select category from dropdown
- [ ] Submit adds product to table
- [ ] Modal closes after success

### Edit Product
- [ ] Edit icon visible in Actions column
- [ ] Click opens modal with current data
- [ ] All fields pre-filled
- [ ] Can modify all fields
- [ ] Validation still works
- [ ] Submit updates product in table
- [ ] Changes reflect immediately

### Delete Product
- [ ] Delete icon visible in Actions column
- [ ] Click shows confirmation dialog
- [ ] Confirm removes product from table
- [ ] Product disappears immediately

## ⚙️ Settings Page Tests

### Appearance
- [ ] Dark Mode toggle present
- [ ] Click toggles theme
- [ ] Theme changes immediately
- [ ] All pages update to dark/light
- [ ] Refresh page - theme persists

### Language
- [ ] Language dropdown present
- [ ] Can select different languages
- [ ] Selection saves

### Notifications
- [ ] Push Notifications toggle present
- [ ] Email Updates toggle present
- [ ] Both toggles work independently
- [ ] Visual feedback when toggling

### Account
- [ ] Profile Information section displays
- [ ] "Edit Profile" button present
- [ ] Password section displays
- [ ] "Change Password" button present

### Save Settings
- [ ] "Save Settings" button present
- [ ] Click shows success message
- [ ] Success message auto-dismisses after 3 seconds
- [ ] Settings persist

## 🎨 UI/UX Tests

### Sidebar
- [ ] Sidebar visible on desktop
- [ ] Logo/title displays
- [ ] Navigation links present
- [ ] Active link highlighted
- [ ] Hover effects work
- [ ] Click navigates to correct page

### Sidebar (Mobile)
- [ ] Sidebar hidden by default on mobile
- [ ] Hamburger menu icon visible
- [ ] Click opens sidebar
- [ ] Overlay appears behind sidebar
- [ ] Click overlay closes sidebar
- [ ] Click link closes sidebar
- [ ] Smooth animations

### Navbar
- [ ] Fixed at top
- [ ] Title displays
- [ ] Theme toggle icon present
- [ ] Profile icon present
- [ ] Profile dropdown works
- [ ] Responsive on mobile

### Dark Mode
- [ ] Toggle switches theme
- [ ] All components update
- [ ] Text readable in both modes
- [ ] Proper contrast
- [ ] Smooth transitions
- [ ] Persists after refresh

### Responsive Design
- [ ] Desktop (>1024px): Full layout, sidebar visible
- [ ] Tablet (640-1024px): Optimized spacing
- [ ] Mobile (<640px): Sidebar collapsible, hamburger menu
- [ ] All features work on all sizes
- [ ] No horizontal scroll
- [ ] Touch-friendly on mobile

## 🧩 Component Tests

### Button
- [ ] Primary variant (blue)
- [ ] Secondary variant (gray)
- [ ] Danger variant (red)
- [ ] Small size
- [ ] Medium size
- [ ] Large size
- [ ] Hover effects
- [ ] Disabled state

### Card
- [ ] White background (light mode)
- [ ] Dark background (dark mode)
- [ ] Shadow visible
- [ ] Rounded corners
- [ ] Optional title works

### Modal
- [ ] Opens when triggered
- [ ] Backdrop visible
- [ ] Click backdrop closes
- [ ] ESC key closes
- [ ] Close button works
- [ ] Scroll locked when open
- [ ] Smooth animations

### Input
- [ ] Label displays
- [ ] Input field works
- [ ] Error message displays
- [ ] Error styling (red border)
- [ ] Focus state visible
- [ ] Dark mode support

### Table
- [ ] Headers display
- [ ] Data rows display
- [ ] Hover effect on rows
- [ ] Custom rendering works
- [ ] Empty state shows
- [ ] Responsive

## 🔒 Security Tests

### Protected Routes
- [ ] Cannot access dashboard without login
- [ ] Cannot access users without login
- [ ] Cannot access products without login
- [ ] Cannot access settings without login
- [ ] Automatic redirect to login
- [ ] After login, redirect to intended page

### Admin-Only Features
- [ ] User cannot access `/products`
- [ ] User redirected if tries to access products
- [ ] User doesn't see "Add User" button
- [ ] User doesn't see edit/delete buttons

### Form Validation
- [ ] Cannot submit empty forms
- [ ] Email validation works
- [ ] Password length validation works
- [ ] Number validation works (price)
- [ ] URL validation works (image)
- [ ] Error messages clear and helpful

## 📱 Mobile-Specific Tests

- [ ] Tap hamburger menu opens sidebar
- [ ] Tap outside closes sidebar
- [ ] All buttons are touch-friendly
- [ ] Forms work with mobile keyboard
- [ ] No zoom on input focus
- [ ] Scrolling works smoothly
- [ ] No layout shifts
- [ ] Images load properly

## 🎯 Performance Tests

- [ ] Pages load quickly
- [ ] No lag when typing in forms
- [ ] Smooth animations
- [ ] No console errors
- [ ] No console warnings
- [ ] Images load efficiently
- [ ] Theme toggle is instant

## 🐛 Error Handling Tests

### Authentication Errors
- [ ] Wrong password shows error
- [ ] Invalid email shows error
- [ ] Network error handled gracefully
- [ ] Error messages are clear

### Form Errors
- [ ] Validation errors display
- [ ] Multiple errors show correctly
- [ ] Errors clear when fixed
- [ ] Submit disabled with errors

### Navigation Errors
- [ ] 404 redirects to home
- [ ] Unauthorized access redirects
- [ ] Back button works correctly

## ✅ Final Checks

- [ ] All pages accessible
- [ ] All features working
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Dark mode works everywhere
- [ ] Responsive on all devices
- [ ] Forms validate correctly
- [ ] Authentication works
- [ ] Role-based access works
- [ ] CRUD operations work
- [ ] Documentation complete

## 📝 Notes

Use this space to note any issues found:

```
Issue 1: [Description]
Status: [Fixed/Pending]

Issue 2: [Description]
Status: [Fixed/Pending]
```

## 🎉 Success Criteria

All checkboxes should be checked for a fully functional application!

If you find any issues:
1. Check browser console for errors
2. Verify Firebase configuration
3. Clear browser cache
4. Restart dev server
5. Check documentation files

---

**Happy Testing! 🚀**
