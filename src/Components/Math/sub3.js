import React, { Component } from 'react';
import Subtraction from './Subtraction';

export default class sub3 extends Component {

  constructor() {
    super();
    this.state = {
      // This is a default value...
      firstnumber: [0],
      secondnumber:[0]

    }
  }

  generateNumbers = () => {
    var randomNumber1 = Math.floor(Math.random() * 100) + 1;
    var randomNumber2 = Math.floor(Math.random() * 100) + 1;


    this.setState({ firstnumber: randomNumber1,secondnumber:randomNumber2 })

  }

  sayQuestion = () => {
    const {firstnumber,secondnumber} = this.state;

    if ('speechSynthesis' in window) {
     }else{
       alert("Sorry, your browser doesn't support text to speech!");
     }

     var msg = new SpeechSynthesisUtterance();

    if(firstnumber>= secondnumber) {
        msg.text = "What does" + firstnumber + "minus" + secondnumber + "equal ?";
        msg.voice = window.speechSynthesis.getVoices()[2];
        msg.lang = "en-US";
window.speechSynthesis.speak(msg);


    }
    else {
        msg.text = "What does" + secondnumber + "minus" + firstnumber + "equal ?";
        msg.lang = "en-US"
        // msg.voice = window.speechSynthesis.getVoices()[2];
        window.speechSynthesis.speak(msg);
    }
  }


  render() {

    const {firstnumber,secondnumber} = this.state;


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
      <div className="card-body">
      <div className='col  d-flex justify-content-center'>
  <p>What is the difference? </p>
  </div>
      <div className='d-flex justify-content-center'>
        <button className='m-1' title="Generate Random Number" onClick={this.generateNumbers}>Generate Numbers</button>
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={this.sayQuestion}><span><i className="fa-solid fa-volume-high"></i></span></button>
        </div> 
        {subtraction}
        
        <br></br>
<div className='d-flex justify-content-center'>
        <Subtraction random1={this.state.firstnumber} random2={this.state.secondnumber}></Subtraction>
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



