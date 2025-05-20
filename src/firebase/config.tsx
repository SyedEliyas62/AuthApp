// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN1TYlT4vKwV3rPQWWtzAGqP3y6XZt434",
  authDomain: "nextauthapp-591c1.firebaseapp.com",
  projectId: "nextauthapp-591c1",
  storageBucket: "nextauthapp-591c1.firebasestorage.app",
  messagingSenderId: "607651399567",
  appId: "1:607651399567:web:f23f3c7415414d20cbedfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app, auth, provider, signInWithPopup, signOut, signInWithEmailAndPassword };