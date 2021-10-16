// take the answre from Addition and bring it forward.. Pass it to this
// set the if the answer = user answer (true), if answer not equal to user (false)
//pass the true and false to the tracker section--- true equals add point, false equals subtract 
//and leave resret button

//start with subtraction then addition

import React, { Component } from 'react';



export default class UserAdd extends Component {

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


   // const {result} = this.state;
    
    return (
   <div>
     <h2>I'm a placeholder</h2>
        </div>
    );
  }
}
