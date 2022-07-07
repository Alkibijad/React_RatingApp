import React from "react";

import RatingItem from "./RatingItem";

function Ratings({ feedback, handleDelete }) {
  return (
    <div>
      {feedback.map((item) => {
        return (
          <RatingItem
            key={item.id}
            item={item}
            handleDelete={ handleDelete}
          />
        );
      })}
    </div>
  );
}

export default Ratings;
