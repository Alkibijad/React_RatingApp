import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import AverageRate from "./components/AverageRate";
import RatingText from "./components/RatingText";
import Ratings from "./components/ratings/RatingList";

import FeedbackData from "./feedbackData/Feedback";
import { useState } from "react";

function App() {


  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/AvarageRate" element={<AverageRate feedback={feedback } />} />
        <Route path="/RatingText" element={<RatingText />} />
        <Route path="/Ratings" element={<Ratings feedback={feedback } />} />
      </Routes>
    </div>
  );
}

export default App;
