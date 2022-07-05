import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import AverageRate from "./components/AverageRate";
import RatingText from "./components/RatingText";
import Ratings from "./components/ratings/RatingList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/AvarageRate" element={<AverageRate />} />
        <Route path="/RatingText" element={<RatingText />} />
        <Route path="/Ratings" element={<Ratings />} />
      </Routes>
    </div>
  );
}

export default App;
