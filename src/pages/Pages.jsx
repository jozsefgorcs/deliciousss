import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
}
//https://www.youtube.com/watch?v=xc4uOzlndAk&t=2119
export default Pages;
