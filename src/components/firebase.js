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
// const database = getDatabase();

// function writeData(hotelId, hotelName, suiteName) {
//   const db = getDatabase();

//   const reference = ref(db, "hotel" + hotelId);

//   set(reference, {
//     hotel: hotelName,
//     suites: suiteName,
//   });
// }

// writeData("Sicily", "White Lotus Sicily", "Berlitz");

// writeData("Hawaii", "White Lotus Hawaii", "Gardenia");

//   set(reference, {
//     hotel: hotelName,
//     suites: [],
//   });
//   suites.forEach((suite) => {
//     reference.child("suites").push(suite);
//   });
// }

// writeData("Sicily", "White Lotus Sicily", [
//   { name: "Berlitz ", price: 600 },
//   { name: "Perennial ", price: 800 },
//   { name: "Pomelia", price: 1000 },
// ]);

// writeData("Hawaii", "White Lotus Hawaii", [
//   { name: "Gardenia ", price: 600 },
//   { name: "Hibiscus ", price: 800 },
//   { name: "Orchid", price: 1000 },
// ]);

export default firebase;
