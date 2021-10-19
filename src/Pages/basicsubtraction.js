import React, { Component } from 'react';
import Subtraction from '../Components/Subtraction';

export default class newsubtraction extends Component {

  constructor() {
    super();
    this.state = {
      // This is a default value...
      firstnumber: [0],
      secondnumber:[0]

    }
  }

  generateNumbers = () => {
    var randomNumber1 = Math.floor(Math.random() * 10) + 1;
    var randomNumber2 = Math.floor(Math.random() * 10) + 1;


    this.setState({ firstnumber: randomNumber1,secondnumber:randomNumber2 })
  }


  render() {

    const {firstnumber,secondnumber} = this.state;

    console.log (firstnumber,secondnumber);

    let subtraction;

    if 
    (firstnumber >= secondnumber) {
      subtraction = (
        <h2 className='text-center'>{firstnumber} - {secondnumber}</h2>
        
      )
    }
    else{
      subtraction=(
        <h2 className='text-center'>{secondnumber} - {firstnumber}</h2>
     )
    }
    
    return (
      <>
       <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
          <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
      <div className="card-header text-center">Basic Subtraction</div>
      <div className="card-body">
      <div className='d-flex justify-content-center'>
        <button title="Generate Random Number" onClick={this.generateNumbers}>Press Me</button>
        </div> 
        <br></br>
        <br></br>
        {subtraction}
<div className='d-flex justify-content-center'>
        <Subtraction random1={this.state.firstnumber} random2={this.state.secondnumber}></Subtraction>
     </div>
        </div>
  </div>
  </div>
  </div>
  </>
      );
    }
  }



