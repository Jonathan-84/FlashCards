import React, { Component } from 'react';


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
   <div>
        <h2>New Addition</h2>

        <button title="Generate Random Number" onClick={this.generateNumbers}>Press Me</button> 
        <h2>{firstnumber} + {secondnumber}</h2>

        </div>
    );
  }
}



