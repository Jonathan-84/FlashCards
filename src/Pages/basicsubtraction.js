import React, { Component } from 'react';


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
        <h2>{firstnumber} - {secondnumber}</h2>
      )
    }
    else{
      subtraction=(
        <h2>{secondnumber} - {firstnumber}</h2>
     )
    }
    
    return (
   <div>
        <h2>New Subtraction</h2>

        <button title="Generate Random Number" onClick={this.generateNumbers}>Press Me</button> 
        
        {subtraction}

        </div>
    );
  }
}
