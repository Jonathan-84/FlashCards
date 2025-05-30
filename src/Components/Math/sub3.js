import React, { useState, useContext } from 'react';
import { TrackerContext } from '../TrackerContext.js'

const Sub3 =() => {
  const { correct, wrong, count, reset, gif, getProblems, sign, highestNumber, answer, firstnumber,secondnumber } = useContext(TrackerContext);
  const [showAnswer, setShowAnswer] = useState(false);

  // generateNumbers = () => {
  //   var randomNumber1 = Math.floor(Math.random() * 10) + 1;
  //   var randomNumber2 = Math.floor(Math.random() * 10) + 1;


  //   this.setState({ firstnumber: randomNumber1,secondnumber:randomNumber2 })
  // }

 const  sayQuestion = () => {

  if ('speechSynthesis' in window) {
   }else{
     alert("Sorry, your browser doesn't support text to speech!");
   }

   var msg = new SpeechSynthesisUtterance();

  if(firstnumber>= secondnumber) {
      msg.text = "What does" + firstnumber + "minus" + secondnumber + "equal ?";
      msg.lang = "en-US";
window.speechSynthesis.speak(msg);


  }
  else {
      msg.text = "What does" + secondnumber + "minus" + firstnumber + "equal ?";
      msg.lang = "en-US"
      window.speechSynthesis.speak(msg);
  }
}



  const sayAnswer = () => {
    

      if ('speechSynthesis' in window) {
  
       }else{
         alert("Sorry, your browser doesn't support text to speech!");
       }
  
       var msg = new SpeechSynthesisUtterance();
  
      if(firstnumber >= secondnumber) {
          let subtracted= firstnumber - secondnumber
          msg.text = firstnumber + "minus" + secondnumber + "equals"+ subtracted;
          msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
  
  
      }
      else {
          let subtracted= secondnumber - firstnumber;
          msg.text = secondnumber + "minus" + firstnumber + "equals"+ subtracted;
          msg.lang = "en-US"
          window.speechSynthesis.speak(msg);
    }
  }
  
  let subtraction;
  if 
    (firstnumber >= secondnumber) {
      subtraction = (
        <h2 className='text-center'>{firstnumber} - {secondnumber}</h2>
        
        
      )
    }
    else{
      subtraction=(
        <h2 className='text-center'>{secondnumber} - {firstnumber}</h2>
     )
    }
    
    return (
      <>
                <br></br>
                <br></br>
   <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Level 3 Subtraction</div>
  <div className="card-body ">
  <div className='col  d-flex justify-content-center'>
  <p>What is the sum? </p>
  </div>
    <div className='d-flex justify-content-center'>
        <button className='m-1' title="Generate Random Number" onClick={() => getProblems('sub2')}>Generate Numbers</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={sayQuestion}><span><i className="fa-solid fa-volume-high"></i></span></button>
        </div>
        <h2 className='text-center'>{subtraction}</h2>
      
        <br></br>
   
        <div className='d-flex justify-content-center'>
        <div>
        <button className='m-1' title="Check Answer" onClick={() => {
  setShowAnswer(!showAnswer);
  setTimeout(() => setShowAnswer(false), 10000);
}}>Check the Answer</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={sayAnswer}><span><i className="fa-solid fa-volume-high"></i></span></button>
        {/* <i className="fa-regular fa-volume"></i> */}
        {showAnswer && <h2 className='text-center'>{answer}</h2>}
        </div>
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

    export default Sub3;







