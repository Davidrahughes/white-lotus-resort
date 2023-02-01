import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Dates from "./Dates";

const Sicily = ({ sicilySuites, updateBooking }) => {
  const [selectedSuiteName, setSelectedSuiteName] = useState("");
  const [selectedSuiteInfo, setSelectedSuiteInfo] = useState("");
  // console.log(sicilySuites);

  return (
    <section>
      <h2 className="hotel">Bonjourno! Welcome to Sicily</h2>
      <div className="sicily">
        <ul className="suiteList">
          {sicilySuites.map((suite, index) => {
            return (
              <li
                key={suite.id || index}
                onClick={() => {
                  setSelectedSuiteName(suite.suiteH.info.name);
                  setSelectedSuiteInfo(suite.suiteH.info);
                }}
              >
                <Link
                  to={`/sicily/${suite.suiteH.info.name}/dates/`}
                >{`${suite.suiteH.info.name}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Routes>
        <Route
          path=":name/dates/"
          element={
            <Dates
              selectedSuiteName={selectedSuiteName}
              selectedSuiteInfo={selectedSuiteInfo}
              sicilySuites={sicilySuites}
              updateBooking={updateBooking}
            />
          }
        />
      </Routes>
    </section>
  );
};
export default Sicily;
