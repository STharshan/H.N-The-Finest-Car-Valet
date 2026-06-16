import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";


function App() {

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
