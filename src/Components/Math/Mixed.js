import React, { Component } from 'react';
//import UserAdd from './UserAnswerAdd';



export default class Mixed extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      result:[]

    }
  }


  
  doMath = () => {
    
    let first= this.props.first;
    let second= this.props.second;
    let operator= this.props.operator;
 

    if(operator === '+') {
        let answer= first + second
        this.setState({ result: answer })
    }
    if(operator === '-' && second > first ) {
        let answer= second - first;
        this.setState({ result: answer })
    }
  
    if(operator === '-' && first > second ) {
      let answer= first - second;
      this.setState({ result: answer })
  }

  }

  sayIt = () => {
    
    let first= this.props.first;
    let second= this.props.second;
    let operator= this.props.operator;

    if ('speechSynthesis' in window) {
  
    }else{
   
      alert("Sorry, your browser doesn't support text to speech!");
    }

    var msg = new SpeechSynthesisUtterance();

    if(operator === '+') {
        let answer= first + second
        msg.text = first + "plus" + second + "equals"+ answer;
        msg.voice = window.speechSynthesis.getVoices()[2];
        msg.lang = "en-US";
window.speechSynthesis.speak(msg);
    }
    if(operator === '-' && second > first ) {
        let answer= second - first;
        msg.text = second + "minus" + first + "equals"+ answer;
        msg.voice = window.speechSynthesis.getVoices()[2];
        msg.lang = "en-US";
window.speechSynthesis.speak(msg);
    }
  
    if(operator === '-' && first > second ) {
      let answer= first - second;
      msg.text = first + "minus" + second + "equals"+ answer;
      msg.voice = window.speechSynthesis.getVoices()[2];
      msg.lang = "en-US";
window.speechSynthesis.speak(msg);
  }
  }




  render() {


    const {result} = this.state;
    
    return (
   <div>
        <button className='m-1' title="Generate Random Number" onClick={this.doMath}>Check the Answer</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={this.sayIt}><span><i className="fa-solid fa-volume-high"></i></span></button>
        {/* <i className="fa-regular fa-volume"></i> */}
       { <h2 className='text-center'>{result}</h2>}
        </div>
    );
  }
}
