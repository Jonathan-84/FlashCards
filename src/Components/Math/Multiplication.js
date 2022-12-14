import React, { Component } from 'react';
//import UserAdd from './UserAnswerAdd';



export default class Multiplication extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      result:[]

    }
  }

  
  multiplyNumbers = () => {
    
    let first= this.props.first;
    let second= this.props.second;
    console.log (first, second);

    let answer= first * second

    this.setState({ result: answer })
  }

  sayAnswer = () => {
    
    let first= this.props.first;
    let second= this.props.second;
  

    let answer= first * second

    if ('speechSynthesis' in window) {
     }else{
       alert("Sorry, your browser doesn't support text to speech!");
     }

     var msg = new SpeechSynthesisUtterance();
     msg.text = first + "multiplied by" + second + "equals"+ answer;
msg.voice = window.speechSynthesis.getVoices()[2];
window.speechSynthesis.speak(msg);
  }




  render() {


    const {result} = this.state;
    
    return (
   <div>
        <button className='m-1' title="Generate Random Number" onClick={this.multiplyNumbers}>Check the Answer</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={this.sayAnswer}><span><i className="fa-solid fa-volume-high"></i></span></button>
       { <h2 className='text-center'>{result}</h2>}
        </div>
    );
  }
}
