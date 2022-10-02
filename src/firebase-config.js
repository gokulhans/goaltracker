import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyBeSJNCmT6nQddvTXQjje_sFiA1A-pOc3M",
  authDomain: "project-tracker-35373.firebaseapp.com",
  projectId: "project-tracker-35373",
  storageBucket: "project-tracker-35373.appspot.com",
  messagingSenderId: "913420084150",
  appId: "1:913420084150:web:2cd9b621ebcce0d33d9717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
