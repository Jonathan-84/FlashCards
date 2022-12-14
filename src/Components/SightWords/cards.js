import React, { useRef } from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
/* Change layout in future to add more randomized testing ability. For now, list sight words
if possible make the second side only appear on click. So word, click to flip card over for definition
and sentence*/

function Cards (props){
  const ref = useRef();

  
  

  return (

    <Flippy
    flipOnHover={false} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={ref} // to use toggle method like ref.curret.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
>
<div className=" card text-info bg-white border-info" >

<FrontSide >
<div  className="card-body">
  <div className="card-title text-center font-weight-bold display-3">{props.word}</div> 
  <div className="text-center">
  <button onClick={props.speak(props.word)} data-bs-toggle="tooltip" data-bs-placement="left" title="Click To Listen" className='m-1'><span><i className="fa-solid fa-volume-high fa-sm"></i></span></button>
  
  <button data-bs-toggle="tooltip" data-bs-placement="right" title="Click for Sample Sentence" className=" bg-white border-info" onClick={()=> {ref.current.toggle()}}> Flip</button>
  </div>
  </div>
    </FrontSide>
    <BackSide>
      <div className='d-flex justify-content-center'>
      <div className="card-title text-center font-weight-bold">{props.sentence}</div>
      </div>
<div className="text-center">
<button onClick={props.speak(props.sentence)} data-bs-toggle="tooltip" data-bs-placement="left" title="Click To Listen" className='m-1'><span><i className="fa-solid fa-volume-high fa-sm"></i></span></button>
 <button className=" bg-white border-info" onClick={()=> {ref.current.toggle()}}> Flip</button>

 </div>
 </BackSide>
 </div>
          
         
 </Flippy>

  

 
  )
}
export default Cards;