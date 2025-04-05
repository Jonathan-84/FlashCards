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
    <ul className="navbar-nav nav justify-content-center">

               <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/reading"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Reading
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                <Link to={"/capital"} className="nav-text">Capital Letter Identification</Link>
                </ul>
                <ul>
                <Link to={"/lowercase"} className="nav-text">Lower Case Letter Identification</Link>
                </ul>
                <ul>
                <Link to={"/sightcards"} className="nav-text">Sight Word Study Cards</Link>
                </ul>
                  </div>
      </ul>
        
                <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/math"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Math
        </Link>
        <div className="dropdown-menu mx-auto" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                <Link to={"/numbers1"} className="nav-text">Numbers: Lvl 1</Link>
                </ul>
                <ul>
                  <Link to={'/numbers2'}className="nav-text">Numbers: Lvl 2</Link>
               </ul>
        <ul>
                  <Link to={"/add1"}className="nav-text">Addition: Lvl 1</Link>
                </ul>
                <ul>
                  <Link to={"/add2"}className="nav-text">Addition: Lvl 2</Link>
                </ul>
                <ul>
                  <Link to={"/add3"}className="nav-text">Addition: Lvl 3</Link>
                </ul>
                <ul>
                  <Link to={"/sub1"}className="nav-text">Subtraction: Lvl 1</Link>
               </ul>
               <ul>
                  <Link to={"/sub2"}className="nav-text">Subtraction: Lvl 2</Link>
               </ul>
               <ul>
                  <Link to={"/sub3"}className="nav-text">Subtraction: Lvl 3</Link>
               </ul>
               <ul>
                  <Link to={"/multi1"}className="nav-text">Multiplication: Lvl 1</Link>
               </ul>
               <ul>
                  <Link to={"/multi2"}className="nav-text">Multiplication: Lvl 2</Link>
               </ul>
               <ul>
                  <Link to={"/multi3"}className="nav-text">Multiplication: Lvl 3</Link>
               </ul>
            
                  </div>
      </ul>
      <ul className="nav-item dropdown">
      <p className="nav-text dropdown-toggle text-primary" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Test Yourself
        </p>
      <div className="dropdown-menu mx-auto" aria-labelledby="navbarDropdownMenuLink">
      <ul>
        <Link className="nav-text " id="navbarDropdownMenuLink" to={"/test"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Math
        </Link>
        </ul>
        <ul>
                  <Link to={"/sightrandom"}className="nav-text">Sight Words</Link>
               </ul>
      
        </div>
        </ul>
        
       </ul>

      
      <ul>
                <Link to={"/about"} className="nav-text">About</Link>
                </ul>
            
             
        </div>
  
</nav>

  )
}
export default Navbar;