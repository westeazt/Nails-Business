// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKFKwJxJ3LSve9-xFIoCS03-8Sh6PHFi0",
  authDomain: "nail-business-3e59f.firebaseapp.com",
  projectId: "nail-business-3e59f",
  storageBucket: "nail-business-3e59f.firebasestorage.app",
  messagingSenderId: "975010839131",
  appId: "1:975010839131:web:ba3869f128a0a6b2a05d7e",
  measurementId: "G-697T7D3S8D"
};

// Initialize Firebase (avoid re-initialization in Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics only on client side
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app; 