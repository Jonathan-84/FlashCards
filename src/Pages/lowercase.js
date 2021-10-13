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
     <div>
          <h2>Lowercase</h2>
  
          <button title="Generate Random Number" onClick={this.randomLowercase}>Press Me</button> 
          <h2>{lowercaseHolder}</h2>
  
          </div>
      );
    }
  }
