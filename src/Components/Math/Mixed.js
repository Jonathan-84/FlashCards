// import React, { useState, useContext } from 'react';
// // import { TrackerContext } from '../TrackerContext';
// // import trackerFunctions from '../TrackerContext';
// import { TrackerContext } from '../TrackerContext.js'


// const Mixed = ({ first, second, operator }) => {
//   const [result, setResult] = useState("");
//   const [usersAnswer, setUsersAnswer] = useState("");
//   const { correct, wrong, count, gif, feedback } = useContext(TrackerContext);

//   const doMath = () => {
//     let answer = null;

//     console.log(first, second, operator); // Debugging step

//     if (operator === "+") {
//       answer = first + second;
//     } else if (operator === "-" && second >= first) {
//       answer = second - first;
//     } else if (operator === "-" && first >= second) {
//       answer = first - second;
//     }

//     console.log("Calculated answer: ", answer); // Debugging step
//     setResult(answer); // Update the result state

//     // Use the `answer` directly instead of relying on `result`
//     checkAnswer(answer, usersAnswer);
//   };

//   const checkAnswer = (answer, usersAnswer) => {
//     console.log("Checking answer: ", answer, usersAnswer);

//     if (parseInt(answer) === parseInt(usersAnswer)) {
//       console.log("you're correct!");
//       correct();  // Increase tracker count
//       setUsersAnswer(""); // Clear the input field
//     } else {
//       console.log("incorrect, try again");
//       wrong();  // Decrease tracker count
//       setUsersAnswer(""); // Clear the input field
//     }
//   };

//   const handleInputChange = (e) => {
//     setUsersAnswer(e.target.value);
//   };

//   return (
//     <div>
//       <label>
//         Your Answer:
//         <input
//           value={usersAnswer}
//           onChange={handleInputChange}
//           type="number"
//         />
//        &nbsp;<button className="btn btn-primary btn-sm" onClick={doMath}>Check Answer</button>
//       </label>
//       <h2 className="text-center">{feedback} </h2>
//     </div>
//   );
// };

//   export default Mixed;
