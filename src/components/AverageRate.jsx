import React from "react";

function AverageRate({ feedback }) {
  // this is JS way of doing it
  // let feedbackRatings = [];

  // feedback.forEach((item) => {
  //   feedbackRatings.push(item.rating);
  // });

  // let total = null;
  // for (let i = 0; i < feedbackRatings.length; i++) {
  //   total += feedbackRatings[i];
  // }
  // let averageNum = total / feedbackRatings.length;

  // using addvanced array method .reduce 

  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/,'')
  


  return (
    <div className="average_rate">
      <p>The average number of your ratings is {isNaN(average)? 0 : average}</p>
    </div>
  );
}

export default AverageRate;


//this component is showing avarage rate number 
// in navbar this Avarage rate component
