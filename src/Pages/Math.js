
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import add1 from '../Assets/AddLvl1.jpg'; // gives image path
import add2 from '../Assets/AddLvl2.jpg'; // gives image path
import sub1 from '../Assets/SubLvl1.jpg'; // gives image path
import multi1 from '../Assets/MultLvl1.jpg'; // gives image path

///// Need to update the images and clean up how I refer to sections
/// also need to add the level 2 for number identification 0-100
 
export default class Math extends Component {


    
  render() {
 
  return (
    <>
    <div className='mb-0'>
    <div className="col d-flex justify-content-center mt-3 ">
      {/*Text Container*/}      
      
    <h1 className="text-info"> Math </h1>
    
      </div>
   
<br></br>
<div className="container-fluid col-7 p-1 ">
<div className=" row d-flex justify-content-center align-items-center">
<div className='row'>
  <div className='col-md border bg-info rounded m-1'>
    
<h2 className='text-center text-white h4'>Addition Level 1</h2>
<Link to={"/add1"} className="nav-text"><img  width="400" height="300" alt="screenshot of add 1" src={add1}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> Two sets of randomized numbers (0-10) are added together.</p>
  
  </div>
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Addition Level 2</h2>
<Link to={"/add2"} className="nav-text"><img  width="400" height="300" alt="screenshot of add 2" src={add2}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> One randomized number (0-100) is added to a second randomized number (0-10).</p>
 </div>
 </div>
 <div className='row'>
 <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Subtraction Level 1</h2>
<Link to={"/sub1"} className="nav-text"><img  width="400" height="300" alt="screenshot of sub 1" src={sub1}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> A random number (0-10) will be subtracted from a another random number (0-10).
  </p>
 </div>
 <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Multiplication Level 1</h2>
<Link to={"/sub1"} className="nav-text"><img  width="400" height="300" alt="screenshot of multi 1" src={multi1}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> A random number (0-10) will be multiplied with a another random number (0-10).
  </p>
 </div>
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
