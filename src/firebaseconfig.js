// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL9k2864ThZmSo31ZeEelY0LwwYb3upgU",
  authDomain: "signlanguage-ac4cd.firebaseapp.com",
  projectId: "signlanguage-ac4cd",
  storageBucket: "signlanguage-ac4cd.appspot.com",
  messagingSenderId: "1054002682901",
  appId: "1:1054002682901:web:37b371acefbf018d4d821c",
  measurementId: "G-P3MEMHB8JW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
