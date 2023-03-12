// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMprQDFDGMd-nYR8Omt1jH8z_K9wnYK98",
  authDomain: "siret-finder.firebaseapp.com",
  projectId: "siret-finder",
  storageBucket: "siret-finder.appspot.com",
  messagingSenderId: "710359511471",
  appId: "1:710359511471:web:9f50f188943c6d864cff5a"
};

// Initialize Firebases
const app = initializeApp(firebaseConfig)
// Initialize Firestore
const db = getFirestore(app)
// Initialize Auth
const auth = getAuth(app)

export { db, auth }