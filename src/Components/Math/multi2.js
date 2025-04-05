import React, { Component } from 'react';
import Multiplication from './Multiplication';


export default class multi2 extends Component {

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
    var randomNumber2 = Math.floor(Math.random() * 10) + 1;


    this.setState({ firstnumber: randomNumber1,secondnumber:randomNumber2 })
  
  }

  sayQuestion = () => {
    const {firstnumber,secondnumber} = this.state;

    if ('speechSynthesis' in window) {

     }else{

       alert("Sorry, your browser doesn't support text to speech!");
     }

var msg = new SpeechSynthesisUtterance();
msg.text = "What does" + firstnumber + "multiplied by" + secondnumber + "equal?";
msg.lang = "en-US"
// msg.voice = window.speechSynthesis.getVoices()[2];
window.speechSynthesis.speak(msg);
  }


  render() {

    const {firstnumber,secondnumber} = this.state;
    
    return (
      <>
                <br></br>
                <br></br>
   <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Level 2 Multiplication</div>
  <div className="card-body ">
  <div className='col  d-flex justify-content-center'>
  <p>What is the product? </p>
  </div>
    <div className='d-flex justify-content-center'>
        <button className='m-1' title="Generate Random Number" onClick={this.generateNumbers}>Generate Numbers</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={this.sayQuestion}><span><i className="fa-solid fa-volume-high"></i></span></button>
        </div>
        <h2 className='text-center'>{firstnumber} x {secondnumber}</h2>
      
        <br></br>
   
        <div className='d-flex justify-content-center'>
           <Multiplication first={this.state.firstnumber} second={this.state.secondnumber}></Multiplication>
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


