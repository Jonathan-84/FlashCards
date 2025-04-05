import React, { useState, useContext } from 'react';
import MultiDivideTest from './MultDivideTest.js';

import { TrackerContext } from '../TrackerContext.js'



const MultiDivTest1 =() => {
  const { correct, wrong, count, reset, gif } = useContext(TrackerContext);
  const [ firstnumber, setFirstNumber ] = useState("");
  const [ secondnumber, setSecondNumber ] = useState("");
  const [ highestNumber, setHighestNumber ] = useState("");
  const [ sign, setSign ]= useState("");
  
// generateDivisionProblem();
  const generateNumbers = () => {
    var randomNumber1 = Math.floor(Math.random() * 10) + 1;
    var randomNumber2 = Math.floor(Math.random() * 10) + 1;
    var signs = ['*', '/'];
    let randomSign=signs[Math.floor(Math.random()*signs.length)];

    if (randomSign === '/') {
      setHighestNumber(randomNumber1 * randomNumber2);
      console.log(`${highestNumber} ÷ ${randomNumber1} = ${randomNumber2}`);
    setFirstNumber(randomNumber1);
    setSecondNumber(randomNumber2);
    setSign(randomSign);
    }
    else {
      setHighestNumber('');
      setFirstNumber(randomNumber1);
      setSecondNumber(randomNumber2);
      setSign(randomSign);
  }
}

  const sayQuestion = () => {
    // const {firstnumber,secondnumber, sign} = this.state;

    if ('speechSynthesis' in window) {
     }else{
       alert("Sorry, your browser doesn't support text to speech!");
     }

var msg = new SpeechSynthesisUtterance();


if(sign === '*') {
  msg.text = "What does" + highestNumber + "multiplied by" + firstnumber + "equal ?";
  msg.lang = "en-US";
window.speechSynthesis.speak(msg);
}
if(sign === '/' ) {
  msg.text = "What does" + highestNumber + 'divided by' + firstnumber + "equal ?";
  msg.lang = "en-US";
window.speechSynthesis.speak(msg);
}
  }



    // const {firstnumber,sign, secondnumber} = this.state;
    let problem;

    if 
    (sign === '*') {
      problem = (
        <h2 className='text-center'>{firstnumber} x {secondnumber}</h2>
      )
    }
    if
    (sign === '/') {
      problem=(
        <h2 className='text-center'>{highestNumber} / {firstnumber}</h2>
     )
    
    }

    
    return (
      <>
   <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Test Your Might: Multiplication and Division</div>
  <div className="card-body ">
  <div className='col  d-flex justify-content-center'>
  <p>What is the answer? </p>
  </div>
    <div className='d-flex justify-content-center'>
        <button className='m-1' title="Generate Random Number" onClick={generateNumbers}>Generate Numbers</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={sayQuestion}><span><i className="fa-solid fa-volume-high"></i></span></button>
        </div>
        {problem}
      
        <br></br>
   
        <div className='d-flex justify-content-center'>
           <MultiDivideTest first={firstnumber} second={secondnumber} operator={sign}></MultiDivideTest>
           </div>
           </div>
           </div>
           </div>
  </div>
  <br></br>
  <br></br>
  </>
      );
    }
    
    export default MultiDivTest1;



