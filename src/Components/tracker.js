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

    // Progress Bar Progression (the following 10 ifs)
    let percentage;

    if (count === 1) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">01</div>
      )
    }

    if (count === 2) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">02</div>
      )
    }
    if (count === 3) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">03</div>
      )
    }
    if (count === 4) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">04</div>
      )
    }
    if (count === 5) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">05</div>
      )
    }
    if (count === 6) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">06</div>
      )
    }
    if (count === 7) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">07</div>
      )
    }
    if (count === 8) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">08</div>
      )
    }
    if (count === 9) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">09</div>
      )
    }
    if (count === 10) {
      percentage =(
        <div class="progress-bar" role="progressbar" style={{"width": "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">10</div>
      )
    }

    return (
    
        <div>
            <div className="col d-flex justify-content-center mt-5">
            <div className=" card text-white bg-warning mb-3 d-flex justify-content-center col-3" >
            <br></br>
             <div class="progress">  
  {percentage}
</div>
<br></br>
     <div className='d-flex justify-content-center'>
             <button title="Generate Random Number" onClick={this.correct}>Correct</button> 
             <button title="Generate Random Number" onClick={this.wrong}>Incorrect</button> 
             <button title="Generate Random Number" onClick={this.reset}>Reset</button> 
             </div>
             <br></br>
             {top}
             <br></br>
             </div>
             </div>
             </div>
         );
         }
        }

      