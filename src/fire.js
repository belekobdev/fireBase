// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDolJgVv52c5xrREebIMV9NUxtpJFT-HLk",
//   authDomain: "movies-d20d8.firebaseapp.com",
//   projectId: "movies-d20d8",
//   storageBucket: "movies-d20d8.appspot.com",
//   messagingSenderId: "769606732407",
//   appId: "1:769606732407:web:60526697d5208ec7265472",
//   measurementId: "G-ETM3G3JZFJ",
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5MPT56Vl364njI5TBeAmvWbh5pE6ChY",
  authDomain: "motionweb-1a1f0.firebaseapp.com",
  projectId: "motionweb-1a1f0",
  storageBucket: "motionweb-1a1f0.appspot.com",
  messagingSenderId: "693430591854",
  appId: "1:693430591854:web:1f10ead764c942e9f2a17f",
  measurementId: "G-PNXVHYZKBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
