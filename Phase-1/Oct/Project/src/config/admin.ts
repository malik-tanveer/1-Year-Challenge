// Admin Configuration
// WARNING: In production, store this in environment variables and validate server-side

export const ADMIN_CONFIG = {
  // Root admin password - CHANGE THIS IN PRODUCTION!
  ROOT_ADMIN_PASSWORD: 'RootAdmin@2024',
  
  // Development admin account
  DEV_ADMIN: {
    email: 'admin@admin.com',
    password: 'admin',
    name: 'Development Admin',
    isDevelopment: true,
  },
  
  // Firestore collections
  COLLECTIONS: {
    USERS: 'users',
    PRODUCTS: 'products',
    ADMIN_LOGS: 'adminLogs',
    USER_ACTIVITY: 'userActivity',
  },
};

// Helper to check if email is development admin
export const isDevAdmin = (email: string): boolean => {
  return email === ADMIN_CONFIG.DEV_ADMIN.email;
};

// Validate root admin password
export const validateRootAdminPassword = (password: string): boolean => {
  return password === ADMIN_CONFIG.ROOT_ADMIN_PASSWORD;
};
