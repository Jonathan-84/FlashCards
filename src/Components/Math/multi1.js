import React, { Component } from 'react';
import Multiplication from './Multiplication';


export default class multi1 extends Component {

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
    
    return (
      <>
   <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Level 1 Multiplication</div>
  <div className="card-body ">
  <div className='col  d-flex justify-content-center'>
  <p>What is the product? </p>
  </div>
    <div className='d-flex justify-content-center'>
        <button title="Generate Random Number" onClick={this.generateNumbers}>Random Numbers</button> 
        </div>
        <h2 className='text-center'>{firstnumber} x {secondnumber}</h2>
      
        <br></br>
   
        <div className='d-flex justify-content-center'>
           <Multiplication first={this.state.firstnumber} second={this.state.secondnumber}></Multiplication>
           </div>
           </div>
           </div>
           </div>
  </div>
  <br></br>
  <br></br>
  </>
      );
    }
  }


