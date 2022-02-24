import React from 'react';
import { Link } from 'react-router-dom';

// Will add in the future
function Footer() {
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      
<div className='footer'>
    <div className="footer-container bg-light pt-3" >  
    <div class="row d-flex align-items-center ">

      {/* This is the Me Buttons*/} 
      <div className='col  '>
      <div>
<a className='footer-text text-dark font-weight-bold' href="https://github.com/Jonathan-84" target="_blank" rel='noreferrer'>GitHub <span className="fa fa-github">
    </span></a>
    </div>
<div>
<a className='footer-text text-dark font-weight-bold' href="https://www.linkedin.com/in/jrob84" target="_blank" rel='noreferrer'>LinkedIn <span className="fa fa-linkedin-square"></span></a>
</div>
</div>

     {/* This is the Quick Nav Section*/}
     <div class="row d-flex justify-content-around  ">
     <div className='col d-flex justify-content-around'>
         <div>
      <Link to={"/letters"} class="secondary">Letters</Link>
      </div>
      <div>
      <Link  to={"/numbers"} class="secondary">Numbers</Link>
      </div>
      <div>
      <Link to={"/sightwords"} class="secondary">Sightwords</Link>
      </div>
      <div>
      <Link  to={"/math"} class="secondary">Math</Link>
      </div>
      </div>

      </div>
</div>
</div>
</div>
</>    
    )
    
}
export default Footer;