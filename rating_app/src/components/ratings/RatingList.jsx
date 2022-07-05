import React from "react";

import RatingItem from "./RatingItem";

function Ratings({ feedback }) {
  return (
    <div>
      {feedback.map((item) => {
        return <RatingItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Ratings;
