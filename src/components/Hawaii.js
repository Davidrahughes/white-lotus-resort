import React from "react";

const Hawaii = ({ hawaiiSuites }) => {
  // Pass hawaiiSuites from Header
  // console.log(hawaiiSuites);
  return (
    <section>
      <h2>Aloha! Welcome to Hawaii</h2>
      <div className="hawaii">
        <ul className="suiteList">
          {hawaiiSuites.map((suite) => {
            return <li>{`${suite.suiteH}`}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};
export default Hawaii;
