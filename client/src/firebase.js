// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-hub-82373.firebaseapp.com",
  projectId: "estate-hub-82373",
  storageBucket: "estate-hub-82373.appspot.com",
  messagingSenderId: "197587578692",
  appId: "1:197587578692:web:d26ed015112cef1e9eb111"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);