import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

interface User {
  uid: string;
  email: string | null;
  name: string;
  role: 'Admin' | 'User';
  isDevelopment?: boolean;
  requiresPasswordChange?: boolean;
  lastVisited?: string;
  openedDashboard?: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signup: (email: string, password: string, name: string, role: 'Admin' | 'User', rootAdminPassword?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean;
  trackDashboardAccess: () => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
  logActivity: (action: string, details?: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          
          // Update last visited timestamp
          await updateDoc(doc(db, 'users', firebaseUser.uid), {
            lastVisited: serverTimestamp()
          });
          
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: userData.name,
            role: userData.role,
            isDevelopment: userData.isDevelopment || false,
            requiresPasswordChange: userData.requiresPasswordChange || false,
            lastVisited: userData.lastVisited,
            openedDashboard: userData.openedDashboard || false
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email: string, password: string, name: string, role: 'Admin' | 'User', rootAdminPassword?: string) => {
    try {
      // If signing up as Admin, validate root admin password
      if (role === 'Admin') {
        const { validateRootAdminPassword } = await import('../config/admin');
        if (!rootAdminPassword || !validateRootAdminPassword(rootAdminPassword)) {
          throw new Error('Invalid root admin password. Only authorized personnel can create admin accounts.');
        }
      }
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        name,
        email,
        role,
        createdAt: serverTimestamp(),
        lastVisited: serverTimestamp(),
        openedDashboard: false,
        isDevelopment: false,
        requiresPasswordChange: false
      });

      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name,
        role,
        isDevelopment: false,
        requiresPasswordChange: false,
        openedDashboard: false
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        
        // Update last visited timestamp
        await updateDoc(doc(db, 'users', firebaseUser.uid), {
          lastVisited: serverTimestamp()
        });
        
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: userData.name,
          role: userData.role,
          isDevelopment: userData.isDevelopment || false,
          requiresPasswordChange: userData.requiresPasswordChange || false,
          lastVisited: userData.lastVisited,
          openedDashboard: userData.openedDashboard || false
        });
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const trackDashboardAccess = async () => {
    if (user && user.uid) {
      try {
        await updateDoc(doc(db, 'users', user.uid), {
          openedDashboard: true,
          lastDashboardAccess: serverTimestamp()
        });
        setUser({ ...user, openedDashboard: true });
      } catch (error) {
        console.error('Error tracking dashboard access:', error);
      }
    }
  };

  const updatePassword = async (newPassword: string) => {
    if (user && user.uid) {
      try {
        const { updatePassword: firebaseUpdatePassword } = await import('firebase/auth');
        if (auth.currentUser) {
          await firebaseUpdatePassword(auth.currentUser, newPassword);
          await updateDoc(doc(db, 'users', user.uid), {
            requiresPasswordChange: false,
            passwordChangedAt: serverTimestamp()
          });
          setUser({ ...user, requiresPasswordChange: false });
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      
      if (!userDoc.exists()) {
        // Create new user document for Google sign-in (default role: User)
        await setDoc(doc(db, 'users', firebaseUser.uid), {
          name: firebaseUser.displayName || 'User',
          email: firebaseUser.email,
          role: 'User',
          createdAt: serverTimestamp(),
          lastVisited: serverTimestamp(),
          openedDashboard: false,
          isDevelopment: false,
          requiresPasswordChange: false
        });

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName || 'User',
          role: 'User',
          isDevelopment: false,
          requiresPasswordChange: false,
          openedDashboard: false
        });
      } else {
        // Update last visited
        await updateDoc(doc(db, 'users', firebaseUser.uid), {
          lastVisited: serverTimestamp()
        });

        const userData = userDoc.data();
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: userData.name,
          role: userData.role,
          isDevelopment: userData.isDevelopment || false,
          requiresPasswordChange: userData.requiresPasswordChange || false,
          lastVisited: userData.lastVisited,
          openedDashboard: userData.openedDashboard || false
        });
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logActivity = async (action: string, details?: any) => {
    if (user && user.uid) {
      try {
        const activityRef = doc(db, 'userActivity', `${user.uid}_${Date.now()}`);
        await setDoc(activityRef, {
          userId: user.uid,
          userEmail: user.email,
          userName: user.name,
          action,
          details: details || {},
          timestamp: serverTimestamp()
        });
      } catch (error) {
        console.error('Error logging activity:', error);
      }
    }
  };

  const isAdmin = user?.role === 'Admin';

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, loginWithGoogle, logout, isAdmin, trackDashboardAccess, updatePassword, logActivity }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
