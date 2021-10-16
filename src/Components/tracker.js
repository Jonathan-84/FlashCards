import React, { Component } from "react";



export default class Tracker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  correct = () => {
    if (this.state.count < 10){
    this.setState({
      
      count: this.state.count + 1
      });
}
};

reset = () => {
  this.setState({
    count: 0
    
  });
};
  

  wrong = () => {
    if (this.state.count > 0){
    this.setState({
      count: this.state.count - 1
    });
  }
  };

  render() {
    const { count } = this.state;
    let top;

    if (count === 10) {
      top =(
        
      <img src="https://images.gr-assets.com/hostedimages/1549287369ra/27013190.gif" class="img-fluid" alt="Genie Congratulations"></img>
      )
    }

    return (
    
        <div>
            <div className="col d-flex justify-content-center mt-5">
            <div className=" card text-white bg-warning mb-3 d-flex justify-content-center col-3" >
             <h2 className='text-center '>Tracker</h2>
     <div className='d-flex justify-content-center'>
             <button title="Generate Random Number" onClick={this.correct}>Correct</button> 
             <button title="Generate Random Number" onClick={this.wrong}>Incorrect</button> 
             <button title="Generate Random Number" onClick={this.reset}>Reset</button> 
             </div>
             <h2 className='text-center'>{count}</h2>
             {top}
             </div>
             </div>
             </div>
         );
         }
        }

      