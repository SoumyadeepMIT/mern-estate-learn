// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8f4c9.firebaseapp.com",
  projectId: "mern-estate-8f4c9",
  storageBucket: "mern-estate-8f4c9.appspot.com",
  messagingSenderId: "1043679965634",
  appId: "1:1043679965634:web:a7bf4bdc59ad1ddc40e65b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);