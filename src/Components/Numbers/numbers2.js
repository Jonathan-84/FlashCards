
import React, { Component } from 'react';


export default class numbers2 extends Component {

  constructor() {
    super();
    this.state = {
      // This is a default value...
      numberHolder: []

    }
  }

  generateRandomNumber = () => {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    this.setState({ numberHolder: randomNumber })
  }


  render() {

    const {numberHolder} = this.state;
    
    return (
<>
<br></br>
<br></br>
      <div className='mb-0'>
      <div className="col d-flex justify-content-center mt-3 ">
      <div className=" card text-white bg-info mb-3 d-flex justify-content-center col col-md-4" >
  <div className="card-header text-center">Level 2 Numbers</div>
  <div className="card-body">
  <div className='col  d-flex justify-content-center'>
  <p>Can your child name the number? </p>
  </div>
  <div className='col  d-flex justify-content-center'>
        <button title="Generate Random Number" onClick={this.generateRandomNumber}>Press Me</button> 
       
       </div>
       <br></br>
       <div className='col  d-flex justify-content-center'>
        <h2 className="text-center">{numberHolder}</h2>
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



