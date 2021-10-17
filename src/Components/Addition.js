//this file will be deleted, I've added the actual math to the bassic addition.js

import React, { Component } from 'react';
import UserAdd from './UserAnswerAdd';



export default class Addition extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      result:[]

    }
  }

  
  addNumbers = () => {
    
    let first= this.props.first;
    let second= this.props.second;
    console.log (first, second);

    let answer= first + second

    this.setState({ result: answer })

    console.log(answer)
  }



  render() {


    const {result} = this.state;
    
    return (
   <div>
        <button title="Generate Random Number" onClick={this.addNumbers}>Check the Answer</button> 
       { <h2 className='text-center'>{result}</h2>}
       <UserAdd random1={this.state.firstnumber} random2={this.state.secondnumber}></UserAdd>
        </div>
    );
  }
}
