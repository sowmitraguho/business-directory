// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6dvqhaTUuBDLHVAxb2Z5lYdebF5jefA4",
  authDomain: "business-directory-aa8af.firebaseapp.com",
  projectId: "business-directory-aa8af",
  storageBucket: "business-directory-aa8af.appspot.com",
  messagingSenderId: "426489052884",
  appId: "1:426489052884:web:b635d23267c3110fbb0541"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)