
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cardimage from '../Assets/Sight Words- full.jpg'; // gives image path
import sighttest from '../Assets/FullSightTest.jpg'; // gives image path


 
export default class SightWords extends Component {


    
  render() {
 
  return (
    <>
    <div className='mb-0'>
    <div className="col d-flex justify-content-center mt-3 ">
      {/*Text Container*/}      
      
    <h1 className="text-info"> Sight Words </h1>
    
      </div>
   
<br></br>
<div className="container-fluid col-7 p-1 ">
<div className=" row d-flex justify-content-center align-items-center">
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Study Cards</h2>
<Link to={"/sightcards"} className="nav-text"><img width="400" height="300" alt="screenshot of card format" src={cardimage}  className="sightcard"/>
  </Link>
  <p className='text-white'> Flip the study card to see the Sight Word used in a sample sentence.
  </p>
  </div>
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Sight Word Test</h2>
<Link to={"/sightrandom"} className="nav-text "><img width="400" height="300" alt="screenshot of random test" src={sighttest}  className="sightcard"/>
  </Link>
  <p className='text-white'> Push the button for a random Sight Word, and let the quizzing begin.
  </p>
  </div>
</div>
</div>
</div>
<br></br>
  <br></br>
</>
  )
}
};
