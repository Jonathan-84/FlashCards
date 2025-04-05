import React, { Component } from 'react';


export default class Subtraction extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      minus:[]

    }
  }

  
  minusNumbers = () => {
    
    let random1= this.props.random1;
    let random2= this.props.random2;


    if(random1 >= random2) {
        let subtracted= random1 - random2
        this.setState({ minus: subtracted })

    }
    else {
        let subtracted= random2 - random1;
        this.setState({ minus: subtracted })
    }
  }
    sayIt = () => {
      let random1= this.props.random1;
      let random2= this.props.random2;
  
      if ('speechSynthesis' in window) {
  
       }else{
         alert("Sorry, your browser doesn't support text to speech!");
       }
  
       var msg = new SpeechSynthesisUtterance();
  
      if(random1 >= random2) {
          let subtracted= random1 - random2
          msg.text = random1 + "minus" + random2 + "equals"+ subtracted;
          msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
  
  
      }
      else {
          let subtracted= random2 - random1;
          msg.text = random2 + "minus" + random1 + "equals"+ subtracted;
          msg.lang = "en-US"
          window.speechSynthesis.speak(msg);
    }
  }
  


  render() {


    const {minus} = this.state;
    
    return (
   <div>
        <button className='m-1' title="Generate Random Number" onClick={this.minusNumbers}>Check the Answer</button>
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={this.sayIt}><span><i className="fa-solid fa-volume-high"></i></span></button> 
        <h2 className='text-center'>{minus}</h2>

        </div>
    );
  }
}
