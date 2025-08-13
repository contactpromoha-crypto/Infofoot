import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ReasonsSection from "./components/ReasonsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <ReasonsSection />
              <TestimonialsSection />
              <FAQSection />
              <FooterSection />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;