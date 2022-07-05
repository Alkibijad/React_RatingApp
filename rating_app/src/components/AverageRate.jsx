import React from "react";

function AverageRate({ feedback }) {
  let feedbackRatings = [];

  feedback.forEach((item) => {
    feedbackRatings.push(item.rating);
  });

  let total = null;
  for (let i = 0; i < feedbackRatings.length; i++) {
    total += feedbackRatings[i];
  }
  let averageNum = total / feedbackRatings.length;

  return (
    <div className="average_num">
      <p>The average num of your ratings is {averageNum}</p>
    </div>
  );
}

export default AverageRate;
