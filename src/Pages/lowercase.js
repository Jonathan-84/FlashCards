import React, { Component } from 'react';


export default class lowercase extends Component {

    constructor() {
      super();
      this.state = {
        // This is a default value...
        lowercaseHolder: []
  
      }
    }

    randomLowercase = ()=> {
        var chars = "abcdefghiklmnopqrstuvwxyz";
        var string_length = 1;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
            this.setState({ lowercaseHolder: randomstring })
        }
        console.log(randomstring)

    }
  
  
    render() {
  
      const {lowercaseHolder} = this.state;
      
      return (
     <div className="col d-flex justify-content-center mt-5">

<div className=" card text-white bg-info mb-3 d-flex justify-content-center col-3" >
  <div className="card-header">Lowercase</div>
  <div className="card-body">
  <button title="Generate Random Number" onClick={this.randomLowercase}>Press Me</button> 
  <br></br>
  <br></br>
          <h2 className="text-center">{lowercaseHolder}</h2>
  </div>
  </div>
  </div>
      );
    }
  }
