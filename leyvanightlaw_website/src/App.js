import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home.jsx";
import Header from "../src/components/header/Header.jsx";
import Footer from "../src/components/footer/Footer.jsx";
import About from "../src/pages/about/About.jsx";
import Contact from "../src/pages/contact/Contact.jsx";
import Location from "../src/pages/location/Location.jsx";
import Services from "../src/pages/services/Services.jsx";
import Testimonials from "../src/pages/testimonials/Testimonials.jsx";
import Benifits from "../src/pages/benifits/Benifits.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/benefits" element={<Benifits />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
