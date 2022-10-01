// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyBDQgNTah3d0zXRTYnhpwHc1CZUWOkUgTs",
  authDomain: "donaciones-79b72.firebaseapp.com",
  projectId: "donaciones-79b72",
  storageBucket: "donaciones-79b72.appspot.com",
  messagingSenderId: "816158113760",
  appId: "1:816158113760:web:83909766265c298d0bf585"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
