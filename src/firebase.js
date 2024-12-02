import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0UuOc6V5os1oHtezPwaBdmzkkgqfr6ak",
  authDomain: "learning-firebase-piyush.firebaseapp.com",
  projectId: "learning-firebase-piyush",
  storageBucket: "learning-firebase-piyush.firebasestorage.app",
  messagingSenderId: "429219484700",
  appId: "1:429219484700:web:477ef03a4d151175243bd9",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
