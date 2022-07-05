import React from "react";

function RatingItem({ item, handleDelete}) {
  let styleCard = {
    boxShadow: "0px 0px 10px 5px grey",
    margin: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
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
  let styleDelete = {
    margin: "10px"
  }

 

  return (
    <div className="rate_card" style={styleCard}>
      <p className="rate_number" style={styleNumber}>{item.rating}</p>
      <p className="rate_text" style={styleText}>{item.text}</p>
      <p className="delete_rate" style={styleDelete} onClick={() => { 
        handleDelete(item.id)
      }}>x</p>
    </div>
  );
}

export default RatingItem;
