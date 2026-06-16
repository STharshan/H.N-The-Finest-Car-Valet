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
      <div className="theme-page min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
