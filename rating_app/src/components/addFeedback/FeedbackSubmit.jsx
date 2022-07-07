import React from "react";
import FeedbackData from "../../feedbackData/Feedback";





function FeedbackSubmit({ disabled, submitBTN, setIsClicked }) {


  function handleClick() { 
      setIsClicked(true)
  }

  
  return (
    <div className="feedback_submit">
      <button className={submitBTN} disabled={disabled} onClick={ handleClick } >Submit</button>
    </div>
  );
}

export default FeedbackSubmit;
