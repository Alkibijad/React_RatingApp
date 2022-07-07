import React from "react";

function RatingItem({ item, handleDelete }) {
  return (
    <div className="rate_card">
      <p className="rate_number">{item.rating}</p>
      <p className="rate_text">{item.text}</p>
      <p
        className="delete_rate"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        x
      </p>
    </div>
  );
}

export default RatingItem;
