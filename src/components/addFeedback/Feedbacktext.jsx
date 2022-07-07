import React, { useState, useRef } from "react";

function Feedbacktext({ setText }) {
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="feedback_text_container">
      <h3>Leave a comment bellow....</h3>
      <textarea
        name="text"
        id="text"
        rows="10"
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default Feedbacktext;
