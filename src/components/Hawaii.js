import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Dates from "./Dates";

const Hawaii = ({ hawaiiSuites, updateBooking }) => {
  const [selectedSuiteName, setSelectedSuiteName] = useState("");
  const [selectedSuiteInfo, setSelectedSuiteInfo] = useState("");
  // console.log(hawaiiSuites);
  // console.log(updateBooking);

  return (
    <section>
      <h2>Aloha! Welcome to Hawaii</h2>
      <div className="hawaii">
        <ul className="suiteList">
          {hawaiiSuites.map((suite, index) => {
            return (
              <li
                key={suite.id || index}
                onClick={() => {
                  setSelectedSuiteName(suite.suiteH.info.name);
                  setSelectedSuiteInfo(suite.suiteH.info);
                }}
              >
                <Link
                  to={`/hawaii/${suite.suiteH.info.name}/dates/`}
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
              hawaiiSuites={hawaiiSuites}
              updateBooking={updateBooking}
            />
          }
        />
      </Routes>
    </section>
  );
};

export default Hawaii;
