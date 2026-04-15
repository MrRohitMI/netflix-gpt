// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmFlba2sQmmKC7Y7hCUZNR1giI06m6jkc",
  authDomain: "netflix-gpt-45.firebaseapp.com",
  projectId: "netflix-gpt-45",
  storageBucket: "netflix-gpt-45.firebasestorage.app",
  messagingSenderId: "570221468575",
  appId: "1:570221468575:web:6c8877bb0e8a3e0531fbaa",
  measurementId: "G-Q1K6R4JL0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();