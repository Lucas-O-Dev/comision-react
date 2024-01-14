// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr69G-NZS1wHeCxTHjHO8Id5LQj-g_kqI",
  authDomain: "veneciacursoreact.firebaseapp.com",
  projectId: "veneciacursoreact",
  storageBucket: "veneciacursoreact.appspot.com",
  messagingSenderId: "706512133144",
  appId: "1:706512133144:web:f4f2348d0f9a267b04776d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)