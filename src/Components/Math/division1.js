import React, { useState, useContext } from 'react';
import Division from './Division.js';

import { TrackerContext } from '../TrackerContext.js'


const Division1 =() => {
  const { correct, wrong, count, reset, gif } = useContext(TrackerContext);
  const [ firstnumber, setFirstNumber ] = useState("");
  const [ secondnumber, setSecondNumber ] = useState("");
  const [ highestNumber, setHighestNumber ] = useState("");
  const [ sign, setSign ]= useState("");
  
// generateDivisionProblem();
  const generateNumbers = () => {
    var randomNumber1 = Math.floor(Math.random() * 10) + 1;
    var randomNumber2 = Math.floor(Math.random() * 10) + 1;
    var signs = ['/'];

let highNumber = randomNumber1 * randomNumber2;
      setHighestNumber(highNumber);
      console.log(`${highestNumber} ÷ ${randomNumber1} = ${randomNumber2}`);
    setFirstNumber(randomNumber1);
    setSecondNumber(randomNumber2);
    setSign(signs);
   
  
}

  const sayQuestion = () => {
    // const {firstnumber,secondnumber, sign} = this.state;

    if ('speechSynthesis' in window) {
     }else{
       alert("Sorry, your browser doesn't support text to speech!");
     }

var msg = new SpeechSynthesisUtterance();



  msg.text = "What does" + highestNumber + 'divided by' + firstnumber + "equal ?";
  msg.voice = window.speechSynthesis.getVoices()[2];
  msg.lang = "en-US";
window.speechSynthesis.speak(msg);

  }



    // const {firstnumber,sign, secondnumber} = this.state;

      let problem=(
        <h2 className='text-center'>{highestNumber} {sign} {firstnumber}</h2>
     )
    
 

    
    return (
      <>
   <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Division Practice</div>
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
           <Division first={firstnumber} second={secondnumber} operator={sign} bigNumber={highestNumber}></Division>
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
    
    export default Division1;




