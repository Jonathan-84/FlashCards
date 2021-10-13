import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(){

    return (
      <>
                <div className='nav-container'>
                  <h2>
                      <Link to={"/Home"} className="nav-text"> FlashCards</Link>
                      </h2>
                <div className='nav-links'>
       {/*      <ul >
                <Link to="/" className="nav-text">Temp</Link>
                        </ul>*/}
                
       <ul>
                <Link to={"/capital"} className="nav-text">Capital Letter Test</Link>
                </ul>
                <ul>
                <Link to={"/lowercase"} className="nav-text">Lower Case Letter Test</Link>
                </ul>
                <ul>
                  <Link to={"/numbers"}className="nav-text">Number Test</Link>
                </ul>
                <ul>
                  <Link to={"/newaddition"}className="nav-text">Beginner Addition</Link>
                </ul>
                <ul>
                  <Link to={"/newsubtraction"}className="nav-text">Beginner Subtraction</Link>
                </ul>
                </div>
                </div>
      </>
    );
  };
  
  export default Navbar;
  