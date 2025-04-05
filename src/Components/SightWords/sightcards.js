import React, { Component } from 'react';


import Words from './wordlist'
import Cards from './cards';
 
export default class SightCards extends Component {


  sayWord = word => () => {
    if ('speechSynthesis' in window) {

     }else{

       alert("Sorry, your browser doesn't support text to speech!");
     }


var msg = new SpeechSynthesisUtterance();
msg.text = word;
msg.lang = "en-US"
// msg.voice = window.speechSynthesis.getVoices()[2];
window.speechSynthesis.speak(msg);
  }
    
  render() {
 
  return (
    <>
    <br></br>
    <br></br>
    <div className='mb-0'>
    <div className="col d-flex justify-content-center mt-3 ">
      {/*Text Container*/}      
      <div className="rounded text-white bg-info text-center sight-title">
    <h1 className=""> Sight Words </h1>
    <p>Click each card to flip them over and see a sample sentence. Before flipping it over, 
      see if your child can recognize the word and provide their own sentence example. </p>
      </div>
      </div>
   
<br></br>

     
<div class="card-columns p-3">

{Words.map((e)=>{
       return (
       <Cards word={e.word} sentence={e.sentence} speak={this.sayWord}/>
     );})}
        </div>
     </div>
     <br></br>
  <br></br>

</>
  )
}
};