import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchBanner from  "./Core/Notifications/LaunchBanner.jsx";
import CoomingSoon from "./app/layout/Coomingsoon.jsx";
import CardStyle from "./Shared/Components/Cardinfo/CardStyle.jsx";
import FAQPage from "./Shared/Components/FAQ/FAQPage.jsx";
import SlideBrand from "./Shared/Components/Slide/SlideBrand.jsx";
import ResearchPage from "./Shared/Components/NewCard/NewCard.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchBanner />} />
        <Route path="/Coomingsoon" element={<CoomingSoon />} />
        <Route path="/CardStyle" element={<CardStyle />} />
        <Route path="/FAQPage" element={<FAQPage />} />
        <Route path="/SlideBrand" element={<SlideBrand />} />
        <Route path="/ResearchPage" element={<ResearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;