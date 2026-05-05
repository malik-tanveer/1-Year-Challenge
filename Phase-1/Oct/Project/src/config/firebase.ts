import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
// Replace these with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyAWhUshVCmEHo6-qIA0hHUON_7btpYWduw",
  authDomain: "clg-project-f1f39.firebaseapp.com",
  projectId: "clg-project-f1f39",
  storageBucket: "clg-project-f1f39.firebasestorage.app",
  messagingSenderId: "994135069151",
  appId: "1:994135069151:web:e15c8a45f7c8c30b03746a",
  measurementId: "G-C05C7264FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;