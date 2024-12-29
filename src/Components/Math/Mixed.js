import React, { Component } from 'react';
//import UserAdd from './UserAnswerAdd';

//need to find correct way to compare the answers
//ideally add to the tracker..
//at minimal, need to find wy to correctly compate... 
//it's all saying correct, even if wrong...


export default class Mixed extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      result:[],
      usersAnswer:[]
    }
  }

// reset =() => {
//   let first= this.props.first;
//   let second= this.props.second;
//   let operator= this.props.operator;

//   if (first !== first || second !==second || operator !== operator)
//   this.setState({ result: [], usersAnswer:[] })
// }
  
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
 this.checkAnswer(this.result);
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

  answerHandler(e) {

      const yourAnswer = e.target.value
  console.log(yourAnswer)

  }

  checkAnswer = (result, usersAnswer) => {
   
    let result1= result;
    let usersAnswer1= usersAnswer;

    if(result1 === usersAnswer1) {
  console.log("you're correct!")
  }
  if(result1 !== usersAnswer1){
    console.log("incorrect, try again")
    }
  }
//


  render() {


    const {result, usersAnswer} = this.state;
    console.log (usersAnswer)
    return (
   <div>
<label>
        Your Answer:
        <input
          // value={answer}
          onChange={e => this.setState({ usersAnswer: e.target.value })}
            
          type="number"
        />
        <button onClick={this.doMath}>
          Check Answer
        </button>
      </label>
        {/* <button className='m-1' title="Generate Random Number" onClick={this.doMath}>Check the Answer</button>  */}
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Click To Listen" className='m-1' onClick={this.sayIt}><span><i className="fa-solid fa-volume-high"></i></span></button>
        {/* <i className="fa-regular fa-volume"></i> */}
       { <h2 className='text-center'>{result}</h2>}
        </div>
    );
  }
}
