// // // App.js
// import { useEffect, useState } from "react";
// import firebase from "../components/firebase";
// import { getDatabase, ref, onValue } from "firebase/database";

// const useLibrary = () => {
//   const [data, setData] = useState([{ title: "Hawaii", id: 1 }]);

//   useEffect(() => {
//     // create a variable that holds our database details
//     const database = getDatabase(firebase);

//     // we then create a variable that makes reference to our database
//     const dbRef = ref(database);

//     // use the onValue module to listen for changes withibn our DB and on page load + whenever changes occur, save the books currently within the DB within state

//     onValue(dbRef, (dbRresponse) => {
//       // here we use Firebase's .val() method to parse our database info the way we want it
//       const dbValue = dbRresponse.val();
//       // console.log("dbvalue", dbValue);

//       const arrayOfHotels = [];
//       // console.log("hotels", arrayOfHotels);

//       for (let propertyKey in dbValue) {
//         // console.log(dbValue[propertyKey]);

//         arrayOfHotels.push({
//           title: dbValue[propertyKey],
//           id: propertyKey,
//         });

//         if (arrayOfHotels.length > 0) {
//           setData(arrayOfHotels);
//         }
//       }
//     });
//   }, []);

//   return data;
// };

// export default useLibrary;
