import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css"
import Product from "./Components/Product";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>} />
        </Routes>
        <Product />
      </BrowserRouter>
    </>
  );
};

export default App;