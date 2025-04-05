import React, { useState, useContext } from 'react';

import { TrackerContext } from '../TrackerContext.js'


const Division = ({ first, second, operator}) => {
  const [result, setResult] = useState("");

  const { correct, wrong, count, gif, feedback } = useContext(TrackerContext);

  const doMath = () => {
    // let answer = null;

    // console.log(first, second, operator); // Debugging step

    // if (operator === "/") {
    //   answer = second;
    // } else if (operator === "*" ) {
    //   answer = second * first;
    // }
    // console.log("Calculated answer: ", answer); // Debugging step
    setResult(second); // Update the result state

    // Use the `answer` directly instead of relying on `result`
    // checkAnswer(answer);
  };
  const sayAnswer = (firstnumber, secondnumber, bigNumber) => {
    

    if ('speechSynthesis' in window) {
     }else{
       alert("Sorry, your browser doesn't support text to speech!");
     }

     var msg = new SpeechSynthesisUtterance();
     msg.text = bigNumber + "divided by" + first + "equals"+ second;
     msg.lang = "en-US"
     // msg.voice = window.speechSynthesis.getVoices()[2];
window.speechSynthesis.speak(msg);
  }


  return (
    <div>
{/* <button className="btn btn-primary btn-sm" onClick={doMath}>Check Answer</button> */}
<button className='m-1' title="Generate Random Number" onClick={doMath}>Check the Answer</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={sayAnswer}><span><i className="fa-solid fa-volume-high"></i></span></button>
       { <h2 className='text-center'>{result}</h2>}
    </div>
  );
};

  export default Division;
