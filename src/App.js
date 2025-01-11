import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Home/Footer";
import FooterBig from "./components/Home/FooterBig"; // Assuming FooterBig is imported
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import WeddingEvents from "./pages/SubEvents/WeddingEvents";
import PrivateEvents from "./pages/SubEvents/PrivateEvents";
import SchoolEvent from "./pages/SubEvents/SchoolEvent";
import ScrollToTop from "./css/pages/ScrollToTop";
import BirthdayEvents from "./pages/SubEvents/BirthdayEvents";
import CopEvents from "./pages/SubEvents/CopEvents";
import HolidayEvents from "./pages/SubEvents/HolidayEvents";
import FitnessEvents from './pages/SubEvents/FitnessEvents';
import NightlifeEvents from "./pages/SubEvents/NightlifeEvents";
import FAQ from "./pages/FAQ";
import EventMain from "./components/Events/EventMain";
import Packages from "./pages/Packages";
import Services from "./pages/Services";
import Venues from "./pages/SubServices.js/Venues";
import Catering from "./pages/SubServices.js/Catering";
import Bar from "./pages/SubServices.js/Bar";
import Chairs from "./pages/SubServices.js/Chairs";
import Tents from "./pages/SubServices.js/Tents";

const AppContent = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Update the state when the window is resized
  const checkMobile = () => {
    if (window.innerWidth <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile(); // Check screen size on load
    window.addEventListener("resize", checkMobile); // Add event listener for resizing

    return () => window.removeEventListener("resize", checkMobile); // Cleanup on unmount
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/** PACKAGES */}
        <Route path="/packages" element={<Packages />} />
                {/** EVENTS */}
                <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wedding" element={<WeddingEvents />} />
        <Route path="/private" element={<PrivateEvents />} />
        <Route path="/school" element={<SchoolEvent />} />
        <Route path="/birthday" element={<BirthdayEvents />} />
        <Route path="/cop" element={<CopEvents />} />
        <Route path="/holiday" element={<HolidayEvents />} />
        <Route path="/nightlife" element={<NightlifeEvents />} />
        <Route path="/fitness" element={<FitnessEvents />} />

                {/** SERVICES */}
                <Route path="/services" element={<Services />} />
                <Route path="/venues" element={<Venues />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/chairs" element={<Chairs />} />
                <Route path="/tents" element={<Tents />} />


        

      </Routes>
      {/* Conditionally render FooterBig or Footer */}
      {(isMobile ? <Footer /> : <FooterBig />)}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
