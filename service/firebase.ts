import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBu29vxOXejNnYk4gFj3VBtAtxYxV4C3Mg",
  authDomain: "blog-next-e960f.firebaseapp.com",
  projectId: "blog-next-e960f",
  storageBucket: "blog-next-e960f.appspot.com",
  messagingSenderId: "589467652184",
  appId: "1:589467652184:web:b6fee876a578c39fb1fa2d",
  measurementId: "G-BMDZLQCM4H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
