import React from 'react';




function Home(){

    return (
        <>
        <br></br>
        <br></br>
        <div className='col'>
        
<h2 className='text-center'>FlashCards</h2>
<div className='col'>
        <div className="alert alert-primary text-center" role="alert">
  Future Updates: Convert to a Progressive Web App and the ability to input answers which will instantly
  be graded and move the tracker. More topics will be added, after all, I created this as an aid for my kids as well.
</div>
</div>
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
<br></br>

<div className="container-fluid col-6 border border-success rounded ">
<div className=" row mr-auto d-flex flex-wrap justify-content-center align-items-center">
  <div className='col'>
<img className='align-left  p-1'src='https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/FlashCardsQR.png' alt='QR code to site'
height={200} width={200} />
</div>
<div className='col'>
<p className='text-center p-1'>Share This App: If you like the application, share it with others by letting them
scan this QR code. </p>
</div>
</div>
</div>

<br></br>
<div>

</div>
<br></br>


</div>
</>
    )
    };
  export default Home;