import React from 'react';




function About(){


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
<div className='col '>
        <div className="alert alert-primary text-center" role="alert">
  <span className="font-weight-bold">Updates:</span> App can be saved for offline usage (PWA) and difficulty terminology has been changed.
Level 2 added for Addition, Numbers, and Level 1 added for Multiplication. New gifs also added. 
<span className="font-weight-bold"> Future Updates:</span> automatic grading (for math), performance improvements, and eventually more topics/levels.
</div>
</div>
        <br></br>
        <br></br>
       < div className='col'>
        <h2 className='text-center'>About the Project</h2>
        
<div className="d-flex mt-auto justify-content-center">
<p> {greetingText()}I'm not an educator... I'm a dad! With a young son in Kindergarten, I'm very involved with his education. 
That involvement continued when my son was interested in advancing ahead in the curriculum.
While he an his friends have focused on the building blocks of reading (letter recognition and sight words), he was already practicing
 basic addition and reading at home.

After his teacher continued to kindly send practice sheet, after practice sheet home, I announced to my wife, "that I could build something that does the same thing". 
With her supportive, "do it", this simple project was born.
<br></br>
    <br></br>
    The goal of this simple site was to give repeatable practice opportunities and make it fun.
    <br></br>
    <br></br>
    <span>
         <ul>📚 Current Practice Opportunities: 
         <br></br>
           <ul>Identify the Letter </ul>
           <ul>Identify the Number </ul>
           <ul>Sightword Practice</ul>
           <ul>Math: Addition, Subtraction, Multiplication  </ul>
         </ul>
         <br></br>
    <span>
         <ul>🎁 Motivation: 
         <br></br>
           <ul>In testing, cause and effect of pushing buttons was fun </ul>
           <ul>Instant Reward (gifs) for correct answers </ul>
           <ul>10 correct answers in a row get unique gif and positive encouragement</ul>
           <ul>Tracker and score always stays positive  </ul>
           <ul>Tracker can be used for any offline quizzes that you create  </ul>
         </ul>
         </span>
         </span>

</p>
</div>
<br></br>
<br></br>
<div>

</div>


</div>
<br></br>
  <br></br>
</>
    )
    };
  export default About;