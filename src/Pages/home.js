import React from 'react';
import QRcode from '../Assets/FlashCards.png'




function Home(){

    return (
        <>
        <br></br>
        <br></br>

        <div class="media">
  <img class="align-self-center mr-3" src={QRcode} alt="QR code to reach this website"/>
  <div class="media-body">
    <h5 class="mt-0">Center-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
        <div className='col'>
        
<h2 className='text-center'>FlashCards</h2>
<br></br>
<div className="d-flex mt-auto justify-content-center">
<p> This simple to use site will help early learners practice their letters, numbers, and math. Following each 
    answer attempt by your child, update the answer tracker above. 
    <br></br>
    <br></br>
       <span>
         <ul>
           <li>If they answer correctly, click the [✔️] and they will be rewarded with a fun gif. </li>
           <li>For each incorrect answer, click the [✖️] and they will slide back on the scale by 1.</li>
           <li>If they reach 10 points, they will a special gif.  </li>
         </ul>
         </span>
    
    The goal of this simple site was to give repeatable practice opportunities and make it fun.
</p>
</div>
<br></br>
<div className='col'>
        <div className="alert alert-primary text-center" role="alert">
  Future Updates: Convert to a Progressive Web App and the ability to input answers which will instantly
  be graded and move tracker... to start.
  the line. 
</div>
</div>
<br></br>


</div>
</>
    )
    };
  export default Home;