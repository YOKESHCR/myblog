// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-qI4EvEPWhYr2wy2Cq4OOQyTOYCQhKLM",
  authDomain: "blog-be4d2.firebaseapp.com",
  projectId: "blog-be4d2",
  storageBucket: "blog-be4d2.appspot.com",
  messagingSenderId: "438816812878",
  appId: "1:438816812878:web:e07c055e930ba9a313381f",
  measurementId: "G-1KCS8MGRV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const authProvider = new GoogleAuthProvider()
export const dbConnection = getFirestore(app)
