// take the answre from Addition and bring it forward.. Pass it to this
// set the if the answer = user answer (true), if answer not equal to user (false)
//pass the true and false to the tracker section--- true equals add point, false equals subtract 
//and leave resret button

//start with subtraction then addition

import React, { Component } from 'react';
import Tracker from '../Components/tracker';


export default class UserAdd extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      users:[],
      grading:[]
    }
  
  }

  handleInput = event => {
    this.setState({ users: event.target.value} );
  };


 logValue = () => {
    console.log(this.state.users);
 };



 addCompare = () => {
 /* const {users} = this.state;
  let answer= this.props.sum;
  if (users === answer){

    this.setState({grading: true});
  }
  else  { 
    this.setState({grading: false});
  }
  return
}*/
 }


  render() {
    const {grading} = this.state;
    console.log(grading)

   // const {result} = this.state;
    
    return (
      <div>
      <input onChange={this.handleInput} placeholder="Enter Your Answer" />
      <button onClick={this.addCompare}>Compare your answer</button>
      <Tracker user={this.state.result} />

    </div>
  );
}
}
