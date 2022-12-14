// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-8k2HC-tR7gw1YnpDjJbhNfedW-pynl4",
  authDomain: "poo-parcial2022.firebaseapp.com",
  projectId: "poo-parcial2022",
  storageBucket: "poo-parcial2022.appspot.com",
  messagingSenderId: "681412493400",
  appId: "1:681412493400:web:907c4a66fb572f886d4a2d",
  measurementId: "G-ZCBGYQNJPR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db