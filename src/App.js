import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import AverageRate from "./components/AverageRate";
import RatingText from "./components/RatingText";
import Ratings from "./components/ratings/RatingList";

import FeedbackData from "./feedbackData/Feedback";
import AddFeedbackFrom from "./components/addFeedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/AvarageRate"
          element={<AverageRate feedback={feedback} />}
        />
        <Route
          path="/RatingText"
          element={<RatingText feedback={feedback} />}
        />
        <Route
          path="/Ratings"
          element={
            <Ratings feedback={feedback} handleDelete={deleteFeedback} />
          }
        />
        <Route path="/AddFeedback" element={<AddFeedbackFrom/> } />
      </Routes>
    </div>
  );
}

export default App;
