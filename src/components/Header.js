import { Link, Routes, Route } from "react-router-dom";
import Hawaii from "./Hawaii";
import React from "react";
import Sicily from "./Sicily";
import Home from "./Home";

const Header = ({ hotels, hawaiiSuites, sicilySuites }) => {
  console.log(hotels);
  console.log(hawaiiSuites);
  console.log(sicilySuites);

  return (
    <header>
      <section>
        <nav>
          <ul className="navigation">
            {hotels.map((hotel) => {
              return (
                <li>
                  <Link
                    to={`/${hotel.title}`}
                  >{`Welcome to ${hotel.title}`}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <section>
          <ul className="suiteList">
            {hotels.map((suite) => {
              return <li>{`${suite.suite1}`}</li>;
            })}
          </ul>
        </section> */}
      </section>
      <Routes>
        {/* <Route path="/" element={<h1>Welcome!</h1>} /> */}
        <Route
          path="/hawaii"
          element={<Hawaii hawaiiSuites={hawaiiSuites} />}
        />
        <Route
          path="/sicily"
          element={<Sicily sicilySuites={sicilySuites} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </header>
  );
};

export default Header;
