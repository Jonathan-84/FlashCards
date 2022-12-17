import React, { Component } from 'react';
//import UserAdd from './UserAnswerAdd';



export default class Addition extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      result:[]

    }
  }


  
  addNumbers = () => {
    
    let first= this.props.first;
    let second= this.props.second;
    console.log (first, second);

    let answer= first + second

    this.setState({ result: answer })

  }

  sayIt = () => {
    
    let first= this.props.first;
    let second= this.props.second;
  

    let answer= first + second

    this.setState({ result: answer })

    if ('speechSynthesis' in window) {
  
     }else{
    
       alert("Sorry, your browser doesn't support text to speech!");
     }

     var msg = new SpeechSynthesisUtterance();
msg.text = first + "plus" + second + "equals"+ answer;
msg.lang = "en-US"
// msg.voice = window.speechSynthesis.getVoices()[2];
window.speechSynthesis.speak(msg);
  }




  render() {


    const {result} = this.state;
    
    return (
   <div>
        <button className='m-1' title="Generate Random Number" onClick={this.addNumbers}>Check the Answer</button> 
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={this.sayIt}><span><i className="fa-solid fa-volume-high"></i></span></button>
        {/* <i className="fa-regular fa-volume"></i> */}
       { <h2 className='text-center'>{result}</h2>}
        </div>
    );
  }
}
