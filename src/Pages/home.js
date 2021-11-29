import React from 'react';




function Home(){


  const greetingText = () => {
    let currentDate = new Date();
let hour = currentDate.getHours();
    console.log(hour)
    if (hour >= 12 && hour <=17) return "Good Afternoon! "
    else if (hour >= 18) return "Good Evening! "
    else return "Good Morning! "
  }

    return (
        <>
        <br></br>
        <br></br>
        <div className='col'>
<h2 className='text-center'>FlashCards</h2>
<div className='col '>
        <div className="alert alert-primary text-center" role="alert">
  Updates: The app is now a PWA, so you can now download the app for offline use but the gifs will not appear.
  Future updates still include automatic grading (when possible), performance improvements, and eventually more topics.
</div>
</div>
<br></br>
<div className="d-flex mt-auto justify-content-center">
<p> {greetingText()} This simple to use site will help early learners practice their letters, numbers, and math. Following each 
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

<div className="container-fluid col-7 border border-success rounded p-1 ">
<div className=" row  d-flex flex-wrap justify-content-center align-items-center">
  <div className='col'>
<img className='align-left p-1'src='https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/FlashCardsQR.png' alt='QR code to site'
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