import React from "react";

function RatingItem({ item }) {
  let styleCard = {
    boxShadow: "0px 0px 10px 5px grey",
    margin: "10px",
  };

  let styleNumber = {
    backgroundColor: "white",
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
      alignItems: "center",
    margin: "5px"
  };

  let styleText = {
    textAlign: "center",
  };

  return (
    <div className="rate_card" style={styleCard}>
      <p className="rate_number" style={styleNumber}>
        {item.rating}
      </p>
      <p className="rate_text" style={styleText}>
        {item.text}
      </p>
    </div>
  );
}

export default RatingItem;
