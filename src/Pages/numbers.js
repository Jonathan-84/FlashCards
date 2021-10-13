
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
   <div>
        <h2>Numbers</h2>

        <button title="Generate Random Number" onClick={this.generateRandomNumber}>Press Me</button> 
        <h2>{numberHolder}</h2>

        </div>
    );
  }
}


