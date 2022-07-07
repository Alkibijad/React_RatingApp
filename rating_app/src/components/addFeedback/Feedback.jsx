import React from "react";

import FeedbackNumbers from "./FeedbackNumbers";
import Feedbacktext from "./Feedbacktext";
import FeedbackSubmit from "./FeedbackSubmit";
import { useState } from "react";
import { useEffect } from "react";

function Feedback() {
  const [number, setNumber] = useState(null);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
      console.log(number);
      console.log(text);
    if (number !== null && text.length > 10) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [number, text]);

  return (
    <div className="feedback_container">
   
      <FeedbackNumbers setNumber={setNumber} />
      <Feedbacktext setText={setText} />
      <FeedbackSubmit disabled={disabled} />
    </div>
  );
}

export default Feedback;
