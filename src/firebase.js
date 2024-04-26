// firebase.js
import "firebase/auth";
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdP5HWdU_BJsIlFQPtWmrqu9y4pJQEOQU",
  authDomain: "cp-2-b0d9c.firebaseapp.com",
  projectId: "cp-2-b0d9c",
  storageBucket: "cp-2-b0d9c.appspot.com",
  messagingSenderId: "952278577252",
  appId: "1:952278577252:web:f4328cda2311910b80ef71",
  measurementId: "G-XK3EHBMMK4",
};

// firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
export const database = getAuth(firebaseApp);
