// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { key } from "../api/ApiKey";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: `${key}`,
  authDomain: "exclusive-99301.firebaseapp.com",
  projectId: "exclusive-99301",
  storageBucket: "exclusive-99301.appspot.com",
  messagingSenderId: "729218736687",
  appId: "1:729218736687:web:8d2be3950b6aa021d1dcda",
  measurementId: "G-K9CKSGW9F2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
