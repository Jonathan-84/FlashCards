import React, { useState, useEffect, useContext} from "react";
import Tracker  from '../tracker.js';

import { TrackerContext } from "../TrackerContext.js";

const SightRandom = () => {
const { correct, wrong, count, reset, gif, target, setTarget, percentageToGoal } = useContext(TrackerContext);

  const [sightword, setSightWord] = useState("");

    const randomSightword = ()=> {
        var words = ["I", "to", "for", "they", "or","can","here","see","play",
    "come", "the", "is", "are", "be", "one", "said", "like", "my", "this", "help",
"of", "you", "as", "does", "by", "she", "has", "good", "little", "and", "he", "with",
"have", "what", "do", "look", "where", "me", "a", "was", "his", "from", "we", "want",
"go", "who", "too"];

let randomWord=words[Math.floor(Math.random()*words.length)];
setSightWord(randomWord);
console.log(randomWord)
}
       
       
    

 
  
      return (
        <>
           <Tracker />
        <br></br>
        <br></br>
        <div className='mb-0'>
        <div className="col d-flex justify-content-center mt-3 ">

        <div className=" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4" >
          <div className="card-header text-center">Random Sight Word</div>
          <div className="card-body">
          <div className='col  d-flex justify-content-center'>
  <p>Can your child name the sight word? </p>
  </div>
            <div className='col  d-flex justify-content-center'>
          <button title="Generate Random Number" className="" onClick={randomSightword}>Get your Sight Word</button> 
          </div>
          <br></br>
          <div className='col  d-flex justify-content-center'>
          <h2 className="text-center">{sightword}</h2>
          </div>
          <div className='col  d-flex justify-content-center'>
             <button title="Add Correct" onClick={correct} type="button" className="btn btn-secondary btn-lg m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="bi bi-check-lg"></i></button>
             <button title="Subtract Incorrect" onClick={wrong} type="button" className="btn btn-secondary btn-lg m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="bi bi-x-lg"></i></button> 
         </div>
      
  </div>
  </div>
  </div>
  </div>
  </>
  )
}
export default SightRandom;