import { useEffect, useState } from "react";
import firebase from "./firebase";
import "firebase/database";
import { getDatabase, ref, onValue } from "firebase/database";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
const Library = () => {
  // Create useState for hotls and suites for BOTH locations
  const [arrayOfHotels, setArrayOfHotels] = useState([]);
  const [arrayOfHawaiiSuites, setArrayOfHawaiiSuites] = useState([]);
  const [arrayOfSicilySuites, setArrayOfSicilySuites] = useState([]);
  const [booking] = useState({});

  const updateBooking = (updateBooking) => {
    const suiteRef = ref(`White Lotus Hawaii/suiteH/${booking.name}/info`);

    suiteRef.update({
      booked: booking.booked,
      guest: booking.guest,
      quantity: booking.quantity,
    });

    // console.log(updateBooking);
  };

  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase);

    // we then create a variable that makes reference to our database
    const dbRef = ref(database);

    // use the onValue module to listen for changes withibn our DB and on page load + whenever changes occur, save the books currently within the DB within state

    onValue(dbRef, (dbRresponse) => {
      // here we use Firebase's .val() method to parse our database info the way we want it
      const dbValue = dbRresponse.val();

      const arrayOfHotels = [];

      const arrayOfHawaiiSuites = [];

      const arrayOfSicilySuites = [];

      // for loop through hotel, and both suites to grab the correct object using .push
      for (let propertyKey in dbValue) {
        arrayOfHotels.push({
          title: dbValue[propertyKey].location,
        });
      }

      for (let suiteKey in dbValue["White Lotus Hawaii"].suiteH) {
        arrayOfHawaiiSuites.push({
          suiteH: dbValue["White Lotus Hawaii"].suiteH[suiteKey],
        });
      }

      for (let suiteKey in dbValue["White Lotus Sicily"].suiteS) {
        arrayOfSicilySuites.push({
          suiteH: dbValue["White Lotus Sicily"].suiteS[suiteKey],
        });
      }
      // set the arrays for each and then console log to confirm
      setArrayOfHotels(arrayOfHotels);
      setArrayOfHawaiiSuites(arrayOfHawaiiSuites);
      setArrayOfSicilySuites(arrayOfSicilySuites);
      // console.log(arrayOfHotels);
      // console.log(arrayOfHawaiiSuites);
      // console.log(arrayOfSicilySuites);
    });
  }, []);

  // const updateBooking = (booking) => {
  //   // create a variable that holds our database details
  //   const database = getDatabase(firebase);

  //   // create a variable that makes reference to our database
  //   const dbRef = ref(database);

  //   // update the corresponding suite in the DB
  //   update(dbRef, {
  //     [booking.hotelName]: {
  //       suite: booking.suite,
  //     },
  //   });
  // };

  return (
    // return the arrays so they can be sent to the Header
    <div>
      <Header
        hotels={arrayOfHotels}
        hawaiiSuites={arrayOfHawaiiSuites}
        sicilySuites={arrayOfSicilySuites}
        updateBooking={updateBooking}
      />
      <Footer />
    </div>
  );
};

export default Library;
