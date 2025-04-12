import React, { useState, useContext } from 'react';
import { TrackerContext } from '../TrackerContext.js'

const Mixed1 =() => {
  const { correct, wrong, count, reset, gif, getProblems, sign, answer, firstnumber,secondnumber, feedback } = useContext(TrackerContext);
  const [showAnswer, setShowAnswer] = useState(false);
  // const [result, setResult] = useState("");
    const [usersAnswer, setUsersAnswer] = useState("");

    console.log("firstnumber: ", firstnumber);
    console.log("secondnumber: ", secondnumber);
    console.log("sign: ", sign);
    console.log("answer: ", answer);
    console.log("usersAnswer: ", usersAnswer);

  const sayQuestion = () => {
  

    if ('speechSynthesis' in window) {
     }else{
       alert("Sorry, your browser doesn't support text to speech!");
     }

var msg = new SpeechSynthesisUtterance();


if(sign === '+') {
  msg.text = "What does" + firstnumber + "plus" + secondnumber + "equal ?";
  msg.lang = "en-US";
window.speechSynthesis.speak(msg);
}
if(sign === '-' && secondnumber > firstnumber ) {
  msg.text = "What does" + secondnumber + 'minus' + firstnumber + "equal ?";
  msg.lang = "en-US";
window.speechSynthesis.speak(msg);
}

if(sign === '-' && firstnumber > secondnumber ) {
msg.text = "What does" + firstnumber + 'minus' + secondnumber + "equal ?";
msg.lang = "en-US";
window.speechSynthesis.speak(msg);
}
  }


  const sayAnswer = () => {
    

      if ('speechSynthesis' in window) {
  
       }else{
         alert("Sorry, your browser doesn't support text to speech!");
       }
  
       var msg = new SpeechSynthesisUtterance();
  
  //     if(firstnumber >= secondnumber) {
  //         let subtracted= firstnumber - secondnumber
  //         msg.text = firstnumber + "minus" + secondnumber + "equals"+ subtracted;
  //         msg.lang = "en-US";
  // window.speechSynthesis.speak(msg);
  
  
  //     }
  //     else {
  //         let subtracted= secondnumber - firstnumber;
  //         msg.text = secondnumber + "minus" + firstnumber + "equals"+ subtracted;
  //         msg.lang = "en-US"
  //         window.speechSynthesis.speak(msg);
  //   }
  if(sign === '+') {
    msg.text = firstnumber + "plus" + secondnumber + "equals" + answer;
    msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
  }
  if(sign === '-' && secondnumber > firstnumber ) {
    msg.text = secondnumber + 'minus' + firstnumber + "equals" + answer;
    msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
  }
  
  if(sign === '-' && firstnumber > secondnumber ) {
  msg.text = firstnumber + 'minus' + secondnumber + "equals"  + answer;
  msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
  }
  }
  
  const handleInputChange = (e) => {
    setUsersAnswer(e.target.value);
  };

  const checkAnswer = () => {
    console.log("State answer:", answer);
    console.log("Users answer:", usersAnswer);

    if (parseInt(answer) === parseInt(usersAnswer)) {
        console.log("you're correct!");
        correct();  // Increase tracker count
        setUsersAnswer(""); // Clear the input field
        setTimeout(() => setShowAnswer(false), 10000);
    } else {
        console.log("incorrect, try again");
        wrong();  // Decrease tracker count
        setUsersAnswer(""); // Clear the input field
        setTimeout(() => setShowAnswer(false), 10000);
    }
    sayAnswer();
};

  let problem;

  if 
  (sign === '+') {
    problem = (
      <h2 className='text-center'>{firstnumber} {sign} {secondnumber}</h2>
    )
  }
  if
  (sign === '-' && secondnumber < firstnumber) {
    problem=(
      <h2 className='text-center'>{firstnumber} {sign} {secondnumber}</h2>
   )
  }
  if
  (sign === '-' && firstnumber < secondnumber) {
    problem=(
      <h2 className='text-center'>{secondnumber} {sign} {firstnumber}</h2>
   )
  }


    
    return (
      <>
                <br></br>
                <br></br>
   <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Test Your Might: Level 1 Add/Sub</div>
  <div className="card-body ">
  <div className='col  d-flex justify-content-center'>
  <p>What is the sum? </p>
  </div>
    <div className='d-flex justify-content-center'>
        <button className='m-1' title="Generate Random Number" onClick={() => getProblems('mix1')}>Generate Numbers</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={sayQuestion}><span><i className="fa-solid fa-volume-high"></i></span></button>
        </div>
        <h2 className='text-center'>{problem}</h2>
      
        <br></br>
   
        <div className='d-flex justify-content-center'>
        <div>
 <div>
      <label>
        Your Answer:
        <input
          value={usersAnswer}
          onChange={handleInputChange}
          type="number"
        />
       &nbsp;<button className="btn btn-primary btn-sm" onClick={checkAnswer}>Check Answer</button>
      </label>
      <h2 className="text-center">{feedback} </h2>
    </div>
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

    export default Mixed1;







