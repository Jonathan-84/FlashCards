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
  <span className="font-weight-bold">Updates:</span> The manual tracker has been removed, you will now automatically be graded and the tracker
  will updated in the test Section which has been newly added. The site is being reorganized based on topic and functionality. Multiplication and 
  Division test option is available.
<span className="font-weight-bold"> Future Updates:</span> performance improvements, ability to practice division, and overall improvements with layout planned.
</div>
</div>
        <br></br>
        <br></br>
       < div className='col'>
        <h2 className='text-center'>About the Project</h2>
        
<div className="d-flex mt-auto justify-content-center">
<p> {greetingText()}I'm not an educator... I'm a dad! When my son was in Kindergarten, he entered at a different ability level, so we were often
working on extra work outside of school.
While he an his friends had focused on the building blocks of reading (letter recognition and sight words) in school, he was already practicing
 basic addition and reading at home.

His teacher would kindly send practice sheet, after practice sheet home, so I told my wife "that I could build something that does the same thing". 
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