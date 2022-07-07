import React from "react";

function FeedbackNumbers({ setNumber }) {



  function getNumber(num) { 
     setNumber(num)
         
    }


  return (
    <div className="feedback_numbers_container">

      <div className="top_five">
      <button className="feedback_number" onClick={() => { getNumber(1)}}>1</button>
      <button className="feedback_number" onClick={() => { getNumber(2)}}>2</button>
      <button className="feedback_number" onClick={() => { getNumber(3)}}>3</button>
      <button className="feedback_number" onClick={() => { getNumber(4)}}>4</button>
      <button className="feedback_number" onClick={() => { getNumber(5)}}>5</button>
                  
      </div>
          
      <div className="bottom_five">
      <button className="feedback_number" onClick={() => { getNumber(6)}}>6</button>
      <button className="feedback_number" onClick={() => { getNumber(7)}}>7</button>
      <button className="feedback_number" onClick={() => { getNumber(8)}}>8</button>
      <button className="feedback_number" onClick={() => { getNumber(9)}}>9</button>
      <button className="feedback_number" onClick={() => { getNumber(10)}}>10</button>
  
      </div>
    </div>
  )
}

export default FeedbackNumbers;
