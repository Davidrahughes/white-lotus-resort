import { Link, Routes, Route } from "react-router-dom";
import Hawaii from "./Hawaii";
import React from "react";
import Sicily from "./Sicily";
import Home from "./Home";

const Header = ({ hotels, hawaiiSuites, sicilySuites, updateBooking }) => {
  // Pass hawaiiSuites, sicilySuites and hotels from Library

  return (
    <header>
      <section>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* Map through hotels to create lis */}
            {hotels.map((hotel, index) => {
              return (
                <li key={hotel.id || index}>
                  {/* Use dot nataion to pass the title of the hotel through to create the Link */}
                  <Link
                    to={`/${hotel.title}`}
                  >{`Welcome to ${hotel.title}`}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <Routes>
        <Route
          path="/hawaii/*"
          element={
            <Hawaii hawaiiSuites={hawaiiSuites} updateBooking={updateBooking} />
          }
        />
        <Route
          path="/sicily/*"
          element={
            <Sicily sicilySuites={sicilySuites} updateBooking={updateBooking} />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </header>
  );
};

export default Header;
