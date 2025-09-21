import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home.jsx";
import Header from "../src/components/header/Header.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
