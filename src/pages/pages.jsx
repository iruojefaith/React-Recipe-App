import React from 'react';
import Home from "./Home.jsx";
import Cuisine from './Cuisine.jsx';
import { Route, Routes } from "react-router-dom";


function Pages() {
  return (

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>

  );
}

export default Pages;