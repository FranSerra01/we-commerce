// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL4er04TIyhCNWuMUGSyYRN4So2_bfAQY",
  authDomain: "we-import-8047a.firebaseapp.com",
  projectId: "we-import-8047a",
  storageBucket: "we-import-8047a.firebasestorage.app",
  messagingSenderId: "847110785909",
  appId: "1:847110785909:web:2f0270185903fd8bd2213c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };