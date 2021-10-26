/// starts at newTracker--- passes the add,subtract,reset functions
/// then new BasicAdd (generates number and adds them)
/// newUser answer to collec tthe user answer and put the log based on their answer
/// pass that to this, the logic to call the tracker functions based on conditionals


import React, { Component } from 'react';


export default class NewUserAdd extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      users:[]
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


 right() {
    this.props.correct()
  }

  wrong() {
      this.props.wrong()
  }

 addCompare = () => {
  const {users} = this.state;
  console.log(users);
 let answer= this.props.sum;
 console.log(answer)

  if (users === answer){
    console.log(answer)
   this.right()
  }
  else  { 
    console.log(answer)
    this.wrong()
  }
  return
}
 


  render() {

   
    return (
      <div>
      <input onChange={this.handleInput} placeholder="Enter Your Answer" />
      <button onClick={this.addCompare}>Compare your answer</button>
      
   

    </div>
  );
}
}
