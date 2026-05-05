// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPEyZBZiCSeWyqZPfux54tnQH7CeaedTM",
  authDomain: "sep-axios.firebaseapp.com",
  projectId: "sep-axios",
  storageBucket: "sep-axios.firebasestorage.app",
  messagingSenderId: "716514693105",
  appId: "1:716514693105:web:7d7193759a418d47f2be50",
  measurementId: "G-EQ1KMVPYEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth(app);