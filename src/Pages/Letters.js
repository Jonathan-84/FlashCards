
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lower from '../Assets/Lowercase.jpg'; // gives image path
import capital from '../Assets/Capital.jpg'; // gives image path
import sighttest from '../Assets/FullSightTest.jpg'; // gives image path

///// Need to update the images and clean up how I refer to sections
/// also need to add the level 2 for number identification 0-100
 
export default class Letters extends Component {


    
  render() {
 
  return (
    <>
    <div className='mb-0'>
    <div className="col d-flex justify-content-center mt-3 ">
      {/*Text Container*/}      
      
    <h1 className="text-info"> Reading </h1>
    
      </div>
   
<br></br>
<div className="container-fluid col-7 p-1 ">
<div className=" row d-flex justify-content-center align-items-center">
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Lowercase</h2>
<Link to={"/lowercase"} className="nav-text"><img  width="400" height="300" alt="screenshot of lowerase" src={lower}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> Can your child identify the lowercase letter? </p>
  
  </div>
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Uppercase</h2>
<Link to={'/capital'} className="nav-text"><img  width="400" height="300" alt="screenshot of Capital" src={capital}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'>  Can your child identify the uppercase letter?</p>
 </div>
 <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Sight Word Practice</h2>
<Link to={"/sightrandom"} className="nav-text "><img width="400" height="300" alt="screenshot of random test" src={sighttest}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> Sight word flashcards, see it in a sentence and hear it spoken.
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
