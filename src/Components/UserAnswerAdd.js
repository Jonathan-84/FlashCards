// take the answre from Addition and bring it forward.. Pass it to this
// set the if the answer = user answer (true), if answer not equal to user (false)
//pass the true and false to the tracker section--- true equals add point, false equals subtract 
//and leave resret button

//start with subtraction then addition

import React, { Component } from 'react';
import Tracker from './tracker';


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

 /* componentDidMount() {
    this.addCompare();
}

 /*logValue = () => {
    console.log(this.state.users);
 };*/



 addCompare = () => {
  const {users} = this.state;
  console.log(users);
//  let answer= this.props.sum;
 // console.log(answer)
/*
  if (users === answer){
    console.log(answer)
    this.setState({grading: true});
  }
  else  { 
    console.log(answer)
    this.setState({grading: false});
  }*/
  return
}
 


  render() {
    const {grading} = this.state;
    console.log(grading)

   
    return (
      <div>
      <input onChange={this.handleInput} placeholder="Enter Your Answer" />
      <button onClick={this.addCompare}>Compare your answer</button>
      <Tracker user={this.state.users} answer={this.props.sum} addRight={this.state.grading} />
   

    </div>
  );
}
}
