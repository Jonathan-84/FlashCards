import React, { useState, useEffect, useContext} from "react";
import { ProgressBar} from 'react-bootstrap';

/// look to remove the http for the gifs, it seem slike it may be causing an issue, it may
///be more secure then as well
import { TrackerContext } from "../Components/TrackerContext";

const Tracker = () => {
  // State variables
  const { correct, wrong, count, reset, gif, target, setTarget, percentageToGoal } = useContext(TrackerContext);
  const [selectedValue, setSelectedValue] = useState(10);
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   setProgress(percentageToGoal); // Update progress when context value changes
  // }, [count]);

  console.log(percentageToGoal);

  const handleSetTarget = () => {
    setTarget(selectedValue); // Update context state on button click
  };


    
    let top;
    if (count === target) {
      alert("Congrats you've reached your target. You should consider leveling up! Now click reset and keep doing an awesome job!");
      top =(
        // Like many, Robin Williams gave me years of laughs and amazing childhood memories (from his roles)
        //Unfortunately like many, he gave his all to others but struggled himself
        //If, you or anyone you know, are having the same struggles please call 1-800-273-8255
        //the U.S. Suicide Prevent hotline... You have a lot to offer the world, after all, 
        // you found this hidden message, so take a care of yourself
      <>
          <p className='text-center font-weight-bold Congrats-font'>Target streak of {target} achieved!!!!</p>
          
      <img src='https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/genie.gif' className="img-fluid" alt="Genie Congratulations"></img>
      </>
      )
    }

    if (count < 10) {
      top =(
        <img src={gif} className="img-fluid" alt=""></img>
      )
    }

    return (
      <>
       <br></br>
        <div className='mb-0'>
            <div className="col d-flex justify-content-center mt-3 ">
            <div className=" card text-white bg-warning mb-1 d-flex justify-content-center col col-md-4" >
              
             <p className='text-center'>
             <div>
      <label htmlFor="options-dropdown">Choose a test target:&nbsp; </label>
      <select
        id="options-dropdown"
        value={selectedValue}
        onChange={(e) => setSelectedValue(Number(e.target.value))} 
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
        <option value={100}>100</option>
      </select> &nbsp;                     
      <button title="Set the correct answer target" onClick={handleSetTarget} type="button" className="btn btn-secondary btn-sm m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="fa-solid fa-gauge"></i></button> 
      {/* <p>You selected: {target}</p> */}
    </div>

            {/* Correct = (<i className="bi bi-check-lg"></i>) Incorrect = (<i className="bi bi-x-lg"></i>)  */}
       {/* Reset = (<i className="bi bi-trash"></i>) </p> */}
       </p>
            <br></br>
           
             <ProgressBar now={percentageToGoal} label={count}/>

<br></br>
     <div className='d-flex justify-content-center'>
       <div className='container'>
    <div className="col d-flex justify-content-between flex-column">
             {/* <button title="Add Correct" onClick={correct} type="button" className="btn btn-secondary btn-lg m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="bi bi-check-lg"></i></button>
             <button title="Subtract Incorrect" onClick={wrong} type="button" className="btn btn-secondary btn-lg m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="bi bi-x-lg"></i></button>  */}
             <button title="Reset" onClick={reset} type="button" className="btn btn-secondary btn-lg m-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"><i className="bi bi-trash"></i></button> 
         </div>
           
             </div>
             </div>
             <br></br>
             {top}
             <br></br>
             {/* <Mixed className='d-none' correct={this.correct} wrong={this.wrong}/> */}
             </div>
             </div>
             </div>
     </>
         );
         }
         export default Tracker;

      