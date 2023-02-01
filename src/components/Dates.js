import React, { useEffect } from "react";
import { useState } from "react";

const Dates = ({ selectedSuiteName, selectedSuiteInfo, updateBooking }) => {
  const [booking, setBooking] = useState(selectedSuiteInfo);
  const [guestName, setGuestName] = useState("");
  const [guestQuantity, setGuestQuantity] = useState(0);

  useEffect(() => {
    console.log("Updated booking:", booking);
  }, [booking]);

  const handleReservation = () => {
    setBooking({
      ...booking,
      booked: !booking.booked,
      guest: guestName,
      quantity: guestQuantity,
    });
    updateBooking(booking);
  };

  return (
    <section className="dates">
      <h2>Now Booking:</h2>
      <h3>{selectedSuiteName}</h3>
      <h3>Currently:{booking.booked ? "Unavailable" : "Available"}</h3>

      <div className="label">
        <label>Guest Name:</label>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
      </div>

      <div className="label">
        <label>Number of Guests:</label>
        <input
          type="number"
          value={guestQuantity}
          onChange={(e) => setGuestQuantity(e.target.value)}
        //   style={{width: "100%"}}
        />
      </div>

      <button onClick={handleReservation}>Reserve</button>
    </section>
  );
};
export default Dates;
