import { Outlet } from "react-router";
import { Link, Routes, Route } from "react-router-dom";
import Hawaii from "./Hawaii";
import React from "react";
import Sicily from "./Sicily";
import Home from "./Home";

const Body = () => {
  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<h1>Welcome!</h1>} /> */}
        <Route path="/Hawaii" element={<Hawaii />} />
        <Route path="/Sicily" element={<Sicily />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default Body;