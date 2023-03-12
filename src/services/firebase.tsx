import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'
import {environment} from "../config/environement";

const app = initializeApp(environment.firebase);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }