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


      {/* This is the Me Buttons*/} 
      <div className='col  '>
      <div className='row '>
      <div className='col d-flex flex-column justify-content-around  flex-md-row '>
<a className='text-dark self-promo font-weight-bold' href="https://github.com/Jonathan-84" target="_blank" rel='noreferrer'>GitHub <span className="fa fa-github">
    </span></a>
    </div>
    <div className='col  '>

<a className=' text-dark self-promo font-weight-bold' href="https://www.linkedin.com/in/jrob84" target="_blank" rel='noreferrer'>LinkedIn <span className="fa fa-linkedin-square"></span></a>
</div>

</div>
</div>


     {/* This is the Quick Nav Section*/}
 
     <div className='col d-flex flex-column justify-content-around  flex-md-row'>
         <div>
      <Link to={"/letters"} class="text-secondary">Letters</Link>
      </div>
      <div>
      <Link  to={"/numbers"} class="text-secondary">Numbers</Link>
      </div>
      <div>
      <Link to={"/sightwords"} class="text-secondary">Sightwords</Link>
      </div>
      <div>
      <Link  to={"/math"} class="text-secondary">Math</Link>
      </div>
      <div>
      <Link  to={"/test"} class="text-secondary">Math Tests</Link>
      </div>
      </div>

  
</div>
</div>

</>    
    )
    
}
export default Footer;