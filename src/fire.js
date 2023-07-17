import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPdoNLjFGVEyTqi7_ieBUFYihrpkDkAw4",
  authDomain: "project-1354d.firebaseapp.com",
  // databaseURL: "https://project-1354d-default-rtdb.firebaseio.com",
  projectId: "project-1354d",
  storageBucket: "project-1354d.appspot.com",
  messagingSenderId: "475890775028",
  appId: "1:475890775028:web:74cb3cc390a541b9953fa1",
  // measurementId: "G-1W0GCEY67G",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = firebase.auth(app);
export default app;
