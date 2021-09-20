// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCws2bjLde2NKn5IMcVWzctWxIvuTeWH5s",
  authDomain: "oz-social-ae064.firebaseapp.com",
  projectId: "oz-social-ae064",
  storageBucket: "oz-social-ae064.appspot.com",
  messagingSenderId: "466608086558",
  appId: "1:466608086558:web:5cae44b10373325c10d80f",
  measurementId: "G-JLNJZ3S6Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}