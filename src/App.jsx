import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
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
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
