import React, { Component } from "react";
import Genie from '../Assets/genie.gif';

/// look to remove the http for the gifs, it seem slike it may be causing an issue, it may
///be more secure then as well

export default class Tracker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      gif:[]
    };
  }

  randomKudos = ()=> {
    var links = ['https://media1.tenor.com/images/1d80a4d408ae2264af736cd62d70d0ff/tenor.gif?itemid=4811418','http://www.clipartsuggest.com/images/601/great-work-clipart-cliparthut-free-clipart-HRW5vv-clipart.gif','https://media1.tenor.com/images/0762c5d136b4574a7031a5e236233a09/tenor.gif?itemid=14357666','https://media1.tenor.com/images/9ac3cb9c126400a33ec7ad9c80f90539/tenor.gif?itemid=15538476', 'https://media.tenor.co/images/179249ffb72b03093a6d0fe6ada397c8/tenor.gif',
 'https://www.genymama.com/uploads/1/1/3/9/113908711/pjmasks_orig.gif'];
    
  let randomLink=links[Math.floor(Math.random()*links.length)];
  this.setState({
      
    gif: randomLink
    });
  console.log(randomLink)
}

randomTryAgain = ()=> {
  
  var trylinks = [
    //'https://3.bp.blogspot.com/-OllJs9voxfE/Wh-HQ-vimuI/AAAAAAAAYgU/F4WUf6ENC5cPr58nVlEux_dGkYWNZl4VwCLcBGAs/s1600/infinity%2Bwar%2Bthanos%2Bvillain%2Btrailer.gif','https://media.tenor.com/images/ae90328133ae4ae4b471322dd38dfbc7/tenor.gif','https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2015/11/slimer-ghostbusters.gif?resize=620%2C200','https://giphy.com/gifs/officialblueytv-bluey-featherwand-ehD1LVNO8ssdA7rZdj',
  //'https://media1.tenor.com/images/a241aa63432145786140a62156d23a6d/tenor.gif?itemid=13313989',
''];
    
  let randomTryLink=trylinks[Math.floor(Math.random()*trylinks.length)];
  this.setState({
      
    gif: randomTryLink
    });
  console.log(randomTryLink)
}

  correct = () => {
    if (this.state.count < 10){
      this.randomKudos()
    this.setState({
      
      count: this.state.count + 1
      });
    }
};

resetgif = ()=> {
  
  var options = [
''];
    
  let scratch=options[Math.floor(Math.random()*options.length)];
  this.setState({
      
    gif: scratch
    });
  console.log(scratch)
}

reset = () => {
  this.resetgif()
  this.setState({
    count: 0
    
  });
};
  

  wrong = () => {
    if (this.state.count > 0){ 
  this.randomTryAgain()
    this.setState({
      count: this.state.count - 1
    });
  }
  };


  render() {


    const { count, gif } = this.state;
   
    
    let top;
    if (count === 10) {
      alert("Congrats you've reached 10 points. Now click reset and do it again!");
      top =(
        // Like many, Robin Williams gave me years of laughs and amazing childhood memories (from his roles)
        //Unfortunately like many, he gave his all to others but struggled himself
        //If, you or anyone you know, are having the same struggles please call 1-800-273-8255
        //the U.S. Suicide Prevent hotline... You have a lot to offer the world, after all, 
        // you found this hidden message, so take a care of yourself
      <>
          <p className='text-center font-weight-bold Congrats-font'>You've Reached 10 Points!!!!</p>
          
      <img src={Genie}className="img-fluid" alt="Genie Congratulations"></img>
      </>
      )
    }

    if (count < 10) {
      top =(
        <img src={gif} className="img-fluid" alt=""></img>
      )
    }

    // Progress Bar Progression (the following 10 ifs)
    let percentage;

    if (count === 1) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">01</div>
      )
    }

    if (count === 2) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">02</div>
      )
    }
    if (count === 3) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">03</div>
      )
    }
    if (count === 4) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">04</div>
      )
    }
    if (count === 5) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">05</div>
      )
    }
    if (count === 6) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">06</div>
      )
    }
    if (count === 7) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">07</div>
      )
    }
    if (count === 8) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">08</div>
      )
    }
    if (count === 9) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">09</div>
      )
    }
    if (count === 10) {
      percentage =(
        <div className="progress-bar" role="progressbar" style={{"width": "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">10</div>
      )
    }

    return (
        <div className='mb-0'>
            <div className="col d-flex justify-content-center mt-3 ">
            <div className=" card text-white bg-warning mb-1 d-flex justify-content-center col col-md-4" >
              
            <p className='text-center'>Correct = (<i className="bi bi-check-lg"></i>) Incorrect = (<i className="bi bi-x-lg"></i>)
       Reset = (<i className="bi bi-trash"></i>) </p>
            <br></br>
             <div className="progress">  
  {percentage}
</div>
<br></br>
     <div className='d-flex justify-content-center'>
       <div className='container'>
    <div className="col d-flex justify-content-between flex-column flex-md-row">
             <button title="Add Correct" onClick={this.correct} type="button" className="btn btn-secondary btn-lg m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="bi bi-check-lg"></i></button>
             <button title="Subtract Incorrect" onClick={this.wrong} type="button" className="btn btn-secondary btn-lg m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="bi bi-x-lg"></i></button> 
             <button title="Reset" onClick={this.reset} type="button" className="btn btn-secondary btn-lg m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="bi bi-trash"></i></button> 
         </div>
           
             </div>
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

      