import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2KfzSEqjnKHxFmjuJxdiEhRYK0feVJyo",
  authDomain: "white-lotus-9e1ba.firebaseapp.com",
  databaseURL: "https://white-lotus-9e1ba-default-rtdb.firebaseio.com",
  projectId: "white-lotus-9e1ba",
  storageBucket: "white-lotus-9e1ba.appspot.com",
  messagingSenderId: "308485976098",
  appId: "1:308485976098:web:3a08ec40dd05277a535a7b",
  measurementId: "G-NBF471MZTJ",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
