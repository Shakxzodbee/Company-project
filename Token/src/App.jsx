import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchBanner from  "./Core/Notifications/LaunchBanner.jsx";
import CoomingSoon from "./app/layout/Coomingsoon.jsx";
import FAQPage from "./Shared/Components/FAQ/FAQPage.jsx";
import LogoSlider from "./Shared/Components/Slide/SlideBrand.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchBanner />} />
        <Route path="/Coomingsoon" element={<CoomingSoon />} />
        <Route path="/faq" element={<LogoSlider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;