// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOuLWsIMRd-1cHarE_iu6cC4mdOJ2UilE",
  authDomain: "miniblogss.firebaseapp.com",
  projectId: "miniblogss",
  storageBucket: "miniblogss.appspot.com",
  messagingSenderId: "528327123743",
  appId: "1:528327123743:web:40b3d5590467c17d74462a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };