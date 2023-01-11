// // App.js
import { useEffect, useState } from "react";
// to access our database, we must import the corresponding firebase modules
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase);

    // we then create a variable that makes reference to our database
    const dbRef = ref(database);

    // use the onValue module to listen for changes withibn our DB and on page load + whenever changes occur, save the books currently within the DB within state

    onValue(dbRef, (dbRresponse) => {
      // here we use Firebase's .val() method to parse our database info the way we want it
      const dbValue = dbRresponse.val();
      //   console.log(dbValue);

      const arrayOfHotels = [];
      console.log(arrayOfHotels);

      for (let propertyKey in dbValue) {
        console.log(dbValue[propertyKey]);

        // arrayOfHotels.push({
        //   title: dbValue[propertyKey],
        //   id: propertyKey,
        // });
      }

      setHotels(arrayOfHotels);
      console.log(arrayOfHotels);

      function setHotels(props) {
        const hotels = props.hotels.map((hotel) => (
          <li key={hotel.id}>{hotel.name}</li>
        ));
        return <ul>{hotels}</ul>;
      }
    });
  }, []);
}

export default Hotels;
