// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqc2T3xrThQCPPJU3N7SuhMP26BfnrFmg",
  authDomain: "simple-firebase-auth-ab718.firebaseapp.com",
  projectId: "simple-firebase-auth-ab718",
  storageBucket: "simple-firebase-auth-ab718.appspot.com",
  messagingSenderId: "597304776383",
  appId: "1:597304776383:web:43ecf8695a49defc5ed80a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;