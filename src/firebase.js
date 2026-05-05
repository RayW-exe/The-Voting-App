// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjYa27HrrxVdIHFsKJuzsOb9Zw3_uB7IQ",
  authDomain: "voting-app-2cac7.firebaseapp.com",
  projectId: "voting-app-2cac7",
  storageBucket: "voting-app-2cac7.firebasestorage.app",
  messagingSenderId: "463120672135",
  appId: "1:463120672135:web:764b50e6d15759aeffdf22",
  measurementId: "G-24EB9T82RC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);