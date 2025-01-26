import React, { useState, useEffect } from "react";
import teamzLogo from "./assets/teamzLogo.png"; // Correct path for the logo

import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Innovation from "./components/Innovation";
import CallToAction from "./components/CallToAction";
import Footer, { Component, TeamZFooter } from "./components/Footer";
import CarouselSection from "./components/CarouselSection";
import "./App.css"; // Ensure this file contains the CSS for the animation
import Clients from "./components/Clients";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Hide splash screen after animation
    }, 3000); // Duration of the splash animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash && (
        <div className="splash-screen">
          <img src={teamzLogo} alt="TeamZ Logo" className="splash-logo" />
        </div>
      )}

      <Navbar />
      <CarouselSection />
      <Introduction />
      <Services />
      <Innovation />
      <Clients />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
