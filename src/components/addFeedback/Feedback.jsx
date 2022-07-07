import React from "react";
import FeedbackNumbers from "./FeedbackNumbers";
import Feedbacktext from "./Feedbacktext";
import FeedbackSubmit from "./FeedbackSubmit";
import { useState, useEffect } from "react";
import FeedbackData from "../../feedbackData/Feedback";

function Feedback() {
  const [number, setNumber] = useState(null);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [submitBTN, setSubmitBTN] = useState("submit_btn_disabled");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let rand = Math.random(Math.floor() * 1000000);
    let newFeedback = {
      id: rand,
      rating: number,
      text: text,
    };
    if (isClicked === true) {
      FeedbackData.push(newFeedback);
      console.log(FeedbackData);
    }
  }, [isClicked]);

  useEffect(() => {
    if (number !== null && text.length > 10) {
      setDisabled(false);
      setSubmitBTN("submit_btn_enabled");
    } else {
      setDisabled(true);
      setSubmitBTN("submit_btn_disabled");
    }
  }, [number, text]);

  return (
    <div className="feedback_container">
      <FeedbackNumbers setNumber={setNumber} />
      <Feedbacktext setText={setText} />
      <FeedbackSubmit
        disabled={disabled}
        submitBTN={submitBTN}
        setIsClicked={setIsClicked}
      />
    </div>
  );
}

export default Feedback;
