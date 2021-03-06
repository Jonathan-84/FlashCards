
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import num1 from '../Assets/NumberLvl1.jpg'; // gives image path
import num2 from '../Assets/NumbersLvl2.jpg'; // gives image path

///// Need to update the images and clean up how I refer to sections
/// also need to add the level 2 for number identification 0-100
 
export default class Numbers extends Component {


    
  render() {
 
  return (
    <>
    <div className='mb-0'>
    <div className="col d-flex justify-content-center mt-3 ">
      {/*Text Container*/}      
      
    <h1 className="text-info"> Numbers </h1>
    
      </div>
   
<br></br>
<div className="container-fluid col-7 p-1 ">
<div className=" row d-flex justify-content-center align-items-center">
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Level 1</h2>
<Link to={"/numbers1"} className="nav-text"><img width="400" height="300"  alt="screenshot of num 1" src={num1}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p> Can your child identify the number between 0-20? </p>
  
  </div>
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Level 2</h2>
<Link to={'/numbers2'} className="nav-text"><img  width="400" height="300" alt="screenshot of num 2" src={num2}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p>  Can your child identify the number between 0-100? </p>
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
