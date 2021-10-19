import React, { Component } from 'react';


export default class capital extends Component {

    constructor() {
      super();
      this.state = {
        // This is a default value...
        uppercaseHolder: []
  
      }
    }

    randomUppercase = ()=> {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var string_length = 1;
        var randomcapital = '';
        for (var i=0; i<string_length; i++) {
            var rlett = Math.floor(Math.random() * chars.length);
            randomcapital += chars.substring(rlett,rlett+1);
            this.setState({ uppercaseHolder: randomcapital })
        }
        console.log(randomcapital)

    }
  
  
    render() {
  
      const {uppercaseHolder} = this.state;
      
      return (
        <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">

        <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
          <div className="card-header text-center">Capital Letters aka Upper Case</div>
          <div className="card-body d-flex justify-content-center">
          <button title="Generate Random Number" className="align-self-center" onClick={this.randomUppercase}>Press Me</button> 
          <br></br>
  <br></br>
          <h2 className="text-center">{uppercaseHolder}</h2>
  </div>
  </div>
  </div>
  </div>
      );
    }
  }
