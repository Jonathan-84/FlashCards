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
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={ref} // to use toggle method like ref.curret.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
>
<div className=" card text-info bg-white border-info" >

<FrontSide >
<div className="card-body">
  <div className="card-title text-center font-weight-bold display-4">{props.word}</div>
  {/*<button onClick={() => { ref.current.toggle(); }}> Toggle via button</button>*/}
  </div>
    </FrontSide>
    <BackSide className='d-flex justify-content-center'>
 <p> {props.sentence}</p>
 </BackSide>
 </div>
          
         
 </Flippy>

  

 
  )
}
export default Cards;