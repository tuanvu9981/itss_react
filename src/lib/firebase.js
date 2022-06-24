import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbX_vLc6qDdGo98hXOHCJHFHhG4gZNs4A",
  authDomain: "fir-itssjap1.firebaseapp.com",
  projectId: "fir-itssjap1",
  storageBucket: "fir-itssjap1.appspot.com",
  messagingSenderId: "441769451550",
  appId: "1:441769451550:web:42b25c74063fbe6bec8e0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);