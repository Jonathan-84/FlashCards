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
     <div>
          <h2>Capital Letters aka Upper Case</h2>
  
          <button title="Generate Random Number" onClick={this.randomUppercase}>Press Me</button> 
          <h2>{uppercaseHolder}</h2>
  
          </div>
      );
    }
  }
