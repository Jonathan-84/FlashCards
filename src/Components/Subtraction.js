import React, { Component } from 'react';


export default class Subtraction extends Component {

  constructor(props) {
    super();
    this.state = {
      // This is a default value...
      minus:[]

    }
  }

  
  minusNumbers = () => {
    
    let random1= this.props.random1;
    let random2= this.props.random2;
    console.log (random1, random2);

    if(random1 >= random2) {
        let subtracted= random1 - random2
        this.setState({ minus: subtracted })

    console.log(subtracted)
    }
    else {
        let subtracted= random2 - random1;
        this.setState({ minus: subtracted })

    console.log(subtracted)
    }

  }


  render() {


    const {minus} = this.state;
    
    return (
   <div>
        <button title="Generate Random Number" onClick={this.minusNumbers}>Check the Answer</button> 
        <h2 className='text-center'>{minus}</h2>

        </div>
    );
  }
}
