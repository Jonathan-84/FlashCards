import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(){

  return (
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
<h2>
                      <Link to={"/Home"} className=" navbar-brand nav-text nav-link"> FlashCards</Link>
                      </h2> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <ul>
                <Link to={"/capital"} className="nav-text">Capital Letter Test</Link>
                </ul>
                <ul>
                <Link to={"/lowercase"} className="nav-text">Lower Case Letter Test</Link>
                </ul>
                <ul>
                  <Link to={"/numbers"}className="nav-text">Number Test</Link>
                </ul>
               
                <ul class="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/#"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Math
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                  <Link to={"/newaddition"}className="nav-text">Beginner Addition</Link>
                </ul>
                <ul>
                  <Link to={"/newsubtraction"}className="nav-text">Beginner Subtraction</Link>
               </ul>
                  </div>
      </ul>
       </ul>
        </div>
  
</nav>

  )
}
export default Navbar;