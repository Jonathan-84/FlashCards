import React, { Component } from 'react';
import Mixed from './Mixed.js';


export default class mixed1 extends Component {

  constructor() {
    super();
    this.state = {
      // This is a default value...
      firstnumber: [0],
      secondnumber:[0],
      sign:[],

    }
  }

  generateNumbers = () => {
    var randomNumber1 = Math.floor(Math.random() * 10) + 1;
    var randomNumber2 = Math.floor(Math.random() * 10) + 1;
    var signs = ['+', '-'];
    let randomSign=signs[Math.floor(Math.random()*signs.length)];

    this.setState({ firstnumber: randomNumber1,secondnumber:randomNumber2, sign:randomSign })
  }

  sayQuestion = () => {
    const {firstnumber,secondnumber, sign} = this.state;

    if ('speechSynthesis' in window) {
     }else{
       alert("Sorry, your browser doesn't support text to speech!");
     }

var msg = new SpeechSynthesisUtterance();


if(sign === '+') {
  msg.text = "What does" + firstnumber + "plus" + secondnumber + "equal ?";
  msg.voice = window.speechSynthesis.getVoices()[2];
  msg.lang = "en-US";
window.speechSynthesis.speak(msg);
}
if(sign === '-' && secondnumber > firstnumber ) {
  msg.text = "What does" + secondnumber + 'minus' + firstnumber + "equal ?";
  msg.voice = window.speechSynthesis.getVoices()[2];
  msg.lang = "en-US";
window.speechSynthesis.speak(msg);
}

if(sign === '-' && firstnumber > secondnumber ) {
msg.text = "What does" + firstnumber + 'minus' + secondnumber + "equal ?";
msg.voice = window.speechSynthesis.getVoices()[2];
msg.lang = "en-US";
window.speechSynthesis.speak(msg);
}
  }


  render() {

    const {firstnumber,sign, secondnumber} = this.state;
    let problem;

    if 
    (sign === '+') {
      problem = (
        <h2 className='text-center'>{firstnumber} + {secondnumber}</h2>
      )
    }
    if
    (sign === '-' && secondnumber < firstnumber) {
      problem=(
        <h2 className='text-center'>{firstnumber} - {secondnumber}</h2>
     )
    }
    if
    (sign === '-' && firstnumber < secondnumber) {
      problem=(
        <h2 className='text-center'>{secondnumber} - {firstnumber}</h2>
     )
    }


    
    return (
      <>
   <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Test Your Might: Basic Level 1 Math</div>
  <div className="card-body ">
  <div className='col  d-flex justify-content-center'>
  <p>What is the answer? </p>
  </div>
    <div className='d-flex justify-content-center'>
        <button className='m-1' title="Generate Random Number" onClick={this.generateNumbers}>Generate Numbers</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={this.sayQuestion}><span><i className="fa-solid fa-volume-high"></i></span></button>
        </div>
        {problem}
      
        <br></br>
   
        <div className='d-flex justify-content-center'>
           <Mixed first={this.state.firstnumber} second={this.state.secondnumber} operator={this.state.sign}></Mixed>
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
  }


