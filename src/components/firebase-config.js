import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from "firebase/auth"; // Import necessary methods
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuTATMYn1s6rEgdmoS0zQvtXriUoRssYw",
  authDomain: "cda-6cb64.firebaseapp.com",
  projectId: "cda-6cb64",
  storageBucket: "cda-6cb64.firebasestorage.app",
  messagingSenderId: "181540940299",
  appId: "1:181540940299:web:20d7f9bfea5fda7537350e",
  measurementId: "G-80QJ8X6R35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase Auth and Firestore
export { auth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, db };
