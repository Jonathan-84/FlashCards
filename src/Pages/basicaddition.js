import React, { Component } from 'react';
import Addition from '../Components/Addition';


export default class newaddition extends Component {

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
  <div className="card-header text-center">Basic Addition</div>
  <div className="card-body ">
  <div className='col  d-flex justify-content-center'>
  <p>What is the sum? </p>
  </div>
    <div className='d-flex justify-content-center'>
        <button title="Generate Random Number" onClick={this.generateNumbers}>Random Numbers</button> 
        </div>
        <h2 className='text-center'>{firstnumber} + {secondnumber}</h2>
      
        <br></br>
   
        <div className='d-flex justify-content-center'>
           <Addition first={this.state.firstnumber} second={this.state.secondnumber}></Addition>
           </div>
           </div>
           </div>
           </div>
  </div>
  </>
      );
    }
  }


