import React from "react";

const Sicily = ({ sicilySuites }) => {
  // Pass sicilySuites from Header
  // console.log(sicilySuites);
  return (
    <section>
      <h2 className="hotel">Bonjourno! Welcome to Sicily</h2>
      <div className="sicily">
        <ul className="suiteList">
          {sicilySuites.map((suite) => {
            return <li>{`${suite.suiteH}`}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};
export default Sicily;
