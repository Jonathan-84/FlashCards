import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(){

  return (
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
<h2>
                      <Link to={"/Home"} className=" font-weight-bold navbar-brand nav-text nav-link"> FlashCards</Link>
                      </h2> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">

               <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/letters"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Letter Identification
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                <Link to={"/capital"} className="nav-text">Capital Letter</Link>
                </ul>
                <ul>
                <Link to={"/lowercase"} className="nav-text">Lower Case Letter</Link>
                </ul>
                  </div>
      </ul>

                <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/numbers"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Number Identification
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                <Link to={"/numbers1"} className="nav-text">Numbers: Level 1</Link>
                </ul>
                <ul>
                  <Link to={'/numbers2'}className="nav-text">Numbers: Level 2</Link>
               </ul>
                  </div>
      </ul>
                   

                <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/sightwords"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sight Words
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                <Link to={"/sightcards"} className="nav-text">Study Cards</Link>
                </ul>
                <ul>
                  <Link to={"/sightrandom"}className="nav-text">Test</Link>
               </ul>
                  </div>
      </ul>
   
               
                <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/math"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Math
        </Link>
        <div className="dropdown-menu mx-auto" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                  <Link to={"/add1"}className="nav-text">Addition: Level 1</Link>
                </ul>
                <ul>
                  <Link to={"/add2"}className="nav-text">Addition: Level 2</Link>
                </ul>
                <ul>
                  <Link to={"/add3"}className="nav-text">Addition: Level 3</Link>
                </ul>
                <ul>
                  <Link to={"/sub1"}className="nav-text">Subtraction: Level 1</Link>
               </ul>
               <ul>
                  <Link to={"/sub2"}className="nav-text">Subtraction: Level 2</Link>
               </ul>
               <ul>
                  <Link to={"/sub3"}className="nav-text">Subtraction: Level 3</Link>
               </ul>
               <ul>
                  <Link to={"/multi1"}className="nav-text">Multiplication: Level 1</Link>
               </ul>
               <ul>
                  <Link to={"/multi2"}className="nav-text">Multiplication: Level 2</Link>
               </ul>
               <ul>
                  <Link to={"/multi3"}className="nav-text">Multiplication: Level 3</Link>
               </ul>
               <ul>
                  <Link to={"/basiclevel1test"}className="nav-text">Test: Basic Level 1</Link>
               </ul>
                  </div>
      </ul>
       </ul>

       <ul className="navbar-nav">
      <ul>
                <Link to={"/about"} className="nav-text">About</Link>
                </ul>
            
                </ul>
        </div>
  
</nav>

  )
}
export default Navbar;