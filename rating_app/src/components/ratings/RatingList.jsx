import React from "react";
import { useState } from "react";
import FeedbackData from "../../feedbackData/Feedback";
import RatingItem from "./RatingItem";

function Ratings() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div>
      {feedback.map((item) => {
        return <RatingItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Ratings;
