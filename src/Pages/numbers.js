
import React, { Component } from 'react';


export default class numbers extends Component {

  constructor() {
    super();
    this.state = {
      // This is a default value...
      numberHolder: []

    }
  }

  generateRandomNumber = () => {
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    this.setState({ numberHolder: randomNumber })
  }


  render() {

    const {numberHolder} = this.state;
    
    return (

  <div className="col d-flex justify-content-center mt-5">
      <div className=" card text-white bg-info mb-3 d-flex justify-content-center col-3" >
  <div className="card-header">Numbers</div>
  <div className="card-body">
        <button title="Generate Random Number" onClick={this.generateRandomNumber}>Press Me</button> 
        <br></br>
  <br></br>
        <h2 className="text-center">{numberHolder}</h2>

        </div>
  </div>
  </div>
      );
    }
  }



