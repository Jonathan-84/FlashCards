
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
<h2 className='text-center text-white'>Study Cards</h2>
<Link to={"/sightcards"} className="nav-text"><img  alt="screenshot of card format" src={cardimage}  className="sightcard"/>
  </Link>
  </div>
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white'>Sight Word Test</h2>
<Link to={"/sightrandom"} className="nav-text"><img  alt="screenshot of random test" src={sighttest}  className="sightcard"/>
  </Link>
  </div>
</div>
</div>
</div>

</>
  )
}
};
