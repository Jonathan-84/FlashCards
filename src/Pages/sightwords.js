
import React, { Component } from 'react';


import Words from '../Components/SightWords/wordlist';
import Cards from '../Components/SightWords/cards';
 
export default class SightWords extends Component {


    
  render() {
 
  return (
    <>
    <div className='mb-0'>
    <div className="col d-flex justify-content-center mt-3 ">
      {/*Text Container*/}      
      <div className="rounded text-white bg-info text-center p-4">
    <h1 className=""> Sight Words </h1>
      </div>
      </div>
   
<br></br>

     
<div class="card-columns p-3">
{Words.map((e)=>{
       return (
       <Cards word={e.word} definition={e.definition} sentence={e.sentence}/>
     );})}
        </div>
     </div>



</>
  )
}
};
