import React, { Component } from "react";



export default class Tracker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  correct = () => {
    this.setState({
      count: this.state.count + 1
      
    });
};
  

  wrong = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    const { count } = this.state;

    return (
    
        <div>
             <h2>Tracker</h2>
     
             <button title="Generate Random Number" onClick={this.correct}>Correct</button> 
             <button title="Generate Random Number" onClick={this.wrong}>Incorrect</button> 
             <h2>{count}</h2>
     
             </div>
         );
         }
        }

      