import React, { Component } from 'react';


export default class sightrandom extends Component {

    constructor() {
      super();
      this.state = {
        // This is a default value...
        sightword: []
  
      }
    }

    randomSightword = ()=> {
        var words = ["I", "to", "for", "they", "or","can","here","see","play",
    "come", "the", "is", "are", "be", "one", "said", "like", "my", "this", "help",
"of", "you", "as", "does", "by", "she", "has", "good", "little", "and", "he", "with",
"have", "what", "do", "look", "where", "me", "a", "was", "his", "from", "we", "want",
"go", "who", "too"];

let randomWord=words[Math.floor(Math.random()*words.length)];
this.setState({
    
  sightword: randomWord
  });
console.log(randomWord)
}
       
       
    

 
  
  
    render() {
  
      const {sightword} = this.state;
      
      return (
        <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">

        <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
          <div className="card-header text-center">Random Sight Word</div>
          <div className="card-body">
          <div className='col  d-flex justify-content-center'>
  <p>Can your child name the sight word? </p>
  </div>
            <div className='col  d-flex justify-content-center'>
          <button title="Generate Random Number" className="" onClick={this.randomSightword}>Press Me</button> 
          </div>
          <br></br>
          <div className='col  d-flex justify-content-center'>
          <h2 className="text-center">{sightword}</h2>
          </div>
      
  </div>
  </div>
  </div>
  </div>
      );
    }
  }
