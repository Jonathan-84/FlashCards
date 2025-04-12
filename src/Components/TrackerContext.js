import react, { createContext, useState } from 'react';

export const TrackerContext = createContext();

export const TrackerProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [gif, setGif] = useState([]);
  const [target, setTarget] = useState(10);
  const [percentageToGoal, setPercentageToGoal] = useState(10);
  const [feedback, setFeedback] = useState("");
  // const [positiveFeedback, setPositiveFeedback] = useState("");
    const [ firstnumber, setFirstNumber ] = useState("");
    const [ secondnumber, setSecondNumber ] = useState("");
    const [ highestNumber, setHighestNumber ] = useState("");
    const [ sign, setSign ]= useState("");
    const [ answer, setAnswer]= useState("");
    

   const targetProgress= async (count, target) => {
    let goal_progress = Math.round(count / target * 100);
    console.log(count);
    console.log(target);
     console.log(goal_progress);
    setPercentageToGoal(goal_progress);
       }


       const correct = () => {
        setCount(prevCount => {
          const newCount = prevCount + 1;
          targetProgress(newCount, target); // Use the updated count
          return newCount; // Return the new count to update the state
        });

        randomKudos(); // Call to get a random kudos message
      };

  const randomGif = ()=> {
    let links = ['https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/Blueyfloss.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/bandit%20dancing.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/MickeyGood.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/MickeyGreat.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/PJMasks.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/animatedGB.gif',
 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/bluey%20solo%20dance.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/minions.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/TMNT.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/kermit.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/captain%20america.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/bluey%20yes.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/olaf.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/feature/pwa/src/Assets/200.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/feature/pwa/src/Assets/b4b41b29987519.5620e8a676a61.gif',
 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/stevie.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/feature/pwa/src/Assets/enjoying-the-ride-grogu.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/feature/pwa/src/Assets/giphy%20(1).gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/feature/pwa/src/Assets/tenor.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/feature/pwa/src/Assets/tumblr_13eef5b3d3c1791ccac51bc651bd6366_b48f03ae_540.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/2dbe36f3daadfe8c48cd474255abe2c2.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/animal.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/arielbubbles.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/arielhair.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/ducktales.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/encanto-gif-7.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/figment.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/herc.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/hercpeg.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/zeus.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/venelope.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/tinker.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/timon.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/star.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/sorcerer.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/smeeDance%20(6).gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/rapunzel.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/pinnochio.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/peterpan.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/lilostitch.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/jumanji.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/joy.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/refs/heads/master/src/Assets/new%20gifs/hook.gif' ];
    
const randomLink = links[Math.floor(Math.random() * links.length)];
setGif(randomLink); // Update gif state
console.log(randomLink);
}

const randomKudos = ()=> {
  let links = ['Great Answer!','You are correct!','Keep the momentum going!','Your practice must be payng off!'];
  
const randomLink = links[Math.floor(Math.random() * links.length)];
setFeedback(randomLink); // Update gif state
console.log(randomLink);
randomGif(); // Call to get a random gif when correct

       setTimeout(() => {
        setFeedback("");
        setGif([]);
      }, 7000);
}



const getProblems = async (type) => { 
  try {
    let endResult;
    let randomNumber1;
    let randomNumber2;
    let signs;
    let randomSign;
    let result;
    switch (type) {
      case 'multi1':
        randomNumber1 = Math.floor(Math.random() * 10) + 1;
        randomNumber2 = Math.floor(Math.random() * 10) + 1;
        signs = ['X'];
        endResult = randomNumber1 * randomNumber2;
        setFirstNumber(randomNumber1);
        setSecondNumber(randomNumber2);
        setSign(signs);
        setAnswer(endResult);
       break;
       case 'multi2':
        randomNumber1 = Math.floor(Math.random() * 100) + 1;
        randomNumber2 = Math.floor(Math.random() * 10) + 1;
        signs = ['X'];
        endResult = randomNumber1 * randomNumber2;
        setFirstNumber(randomNumber1);
        setSecondNumber(randomNumber2);
        setSign(signs);
        setAnswer(endResult);
       break;
       case 'multi3':
        randomNumber1 = Math.floor(Math.random() * 100) + 1;
        randomNumber2 = Math.floor(Math.random() * 100) + 1;
        signs = ['X'];
        endResult = randomNumber1 * randomNumber2;
        setFirstNumber(randomNumber1);
        setSecondNumber(randomNumber2);
        setSign(signs);
        setAnswer(endResult);
       break;
      case 'division1':
         randomNumber1 = Math.floor(Math.random() * 10) + 1;
         randomNumber2 = Math.floor(Math.random() * 10) + 1;
         signs = ['/'];
    
    let highNumber = randomNumber1 * randomNumber2;
          setHighestNumber(highNumber);
          console.log(`${highestNumber} ÷ ${randomNumber1} = ${randomNumber2}`);
        setFirstNumber(randomNumber1);
        setSecondNumber(randomNumber2);
        setSign(signs);
        break;
        case 'sub1':
         randomNumber1 = Math.floor(Math.random() * 10) + 1;
         randomNumber2 = Math.floor(Math.random() * 10) + 1;
         signs = ['+'];

         setFirstNumber(randomNumber1);
         setSecondNumber(randomNumber2);
         setSign(signs);
         
         if(randomNumber1 >= randomNumber2) {
                 endResult= randomNumber1 - randomNumber2
                  setAnswer(endResult);  
          
              }
              else {
                   endResult= randomNumber2 - randomNumber1;
                  setAnswer(endResult);  
              }
        // setAnswer(endResult);     
      break;
      case 'sub2':
        randomNumber1 = Math.floor(Math.random() * 100) + 1;
        randomNumber2 = Math.floor(Math.random() * 10) + 1;
        signs = ['+'];

        setFirstNumber(randomNumber1);
        setSecondNumber(randomNumber2);
        setSign(signs);
        
        if(randomNumber1 >= randomNumber2) {
                endResult= randomNumber1 - randomNumber2
                 setAnswer(endResult);  
         
             }
             else {
                  endResult= randomNumber2 - randomNumber1;
                 setAnswer(endResult);  
             }
       // setAnswer(endResult);     
     break;
     case 'sub3':
      randomNumber1 = Math.floor(Math.random() * 100) + 1;
      randomNumber2 = Math.floor(Math.random() * 100) + 1;
      signs = ['+'];

      setFirstNumber(randomNumber1);
      setSecondNumber(randomNumber2);
      setSign(signs);
      
      if(randomNumber1 >= randomNumber2) {
              endResult= randomNumber1 - randomNumber2
               setAnswer(endResult);  
       
           }
           else {
                endResult= randomNumber2 - randomNumber1;
               setAnswer(endResult);  
           }
     // setAnswer(endResult);     
   break;
   case 'mix1':
    randomNumber1 = Math.floor(Math.random() * 10) + 1;
    randomNumber2 = Math.floor(Math.random() * 10) + 1;
    signs = ['+', '-'];
    randomSign = signs[Math.floor(Math.random() * signs.length)];
    setFirstNumber(randomNumber1);
    setSecondNumber(randomNumber2);
    setSign(randomSign);

    const calculateAndSetAnswer1 = async () => {
      if (typeof sign === "undefined" || typeof randomNumber1 === "undefined" || typeof randomNumber2 === "undefined") {
          console.error("One or more required variables are undefined");
          return;
      }
  
      let result;
  
      if (randomSign === "+") {
          result = randomNumber1 + randomNumber2;
        // await  setAnswer(result);
      } else if (randomSign === "-" && randomNumber2 >= randomNumber1) {
          result = randomNumber2 - randomNumber1;
          // await setAnswer(result);
      } else if (randomSign === "-" && randomNumber1 >= randomNumber2) {
          result = randomNumber1 - randomNumber2;
          // await setAnswer(result);
      } else {
          console.error("Invalid sign or unexpected values");
          return;
      }
  
      await setAnswer(result);
      console.log("firstNumber", randomNumber1)
      console.log("secondNumber", randomNumber2)
      console.log("sign", randomSign)
      console.log("Calculated answer:", result);
      // console.log("State of answer:", answer);
  };

    calculateAndSetAnswer1(randomNumber1, randomNumber2, randomSign); // Call the async function
    break;
   case 'mix2':
    randomNumber1 = Math.floor(Math.random() * 100) + 1;
    randomNumber2 = Math.floor(Math.random() * 10) + 1;
    signs = ['+', '-'];
    randomSign = signs[Math.floor(Math.random() * signs.length)];
    setFirstNumber(randomNumber1);
    setSecondNumber(randomNumber2);
    setSign(randomSign);

    const calculateAndSetAnswer2 = async () => {
      if (typeof sign === "undefined" || typeof randomNumber1 === "undefined" || typeof randomNumber2 === "undefined") {
          console.error("One or more required variables are undefined");
          return;
      }
  
      let result;
  
      if (randomSign === "+") {
          result = randomNumber1 + randomNumber2;
        // await  setAnswer(result);
      } else if (randomSign === "-" && randomNumber2 >= randomNumber1) {
          result = randomNumber2 - randomNumber1;
          // await setAnswer(result);
      } else if (randomSign === "-" && randomNumber1 >= randomNumber2) {
          result = randomNumber1 - randomNumber2;
          // await setAnswer(result);
      } else {
          console.error("Invalid sign or unexpected values");
          return;
      }
  
      await setAnswer(result);
      console.log("firstNumber", randomNumber1)
      console.log("secondNumber", randomNumber2)
      console.log("sign", randomSign)
      console.log("Calculated answer:", result);
      // console.log("State of answer:", answer);
  };

    calculateAndSetAnswer2(randomNumber1, randomNumber2, randomSign); // Call the async function
   break;
   case 'mix3':
    randomNumber1 = Math.floor(Math.random() * 100) + 1;
    randomNumber2 = Math.floor(Math.random() * 100) + 1;
    signs = ['+', '-'];
    randomSign = signs[Math.floor(Math.random() * signs.length)];
    setFirstNumber(randomNumber1);
    setSecondNumber(randomNumber2);
    setSign(randomSign);

    const calculateAndSetAnswer3 = async () => {
      if (typeof sign === "undefined" || typeof randomNumber1 === "undefined" || typeof randomNumber2 === "undefined") {
          console.error("One or more required variables are undefined");
          return;
      }
  
      let result;
  
      if (randomSign === "+") {
          result = randomNumber1 + randomNumber2;
        // await  setAnswer(result);
      } else if (randomSign === "-" && randomNumber2 >= randomNumber1) {
          result = randomNumber2 - randomNumber1;
          // await setAnswer(result);
      } else if (randomSign === "-" && randomNumber1 >= randomNumber2) {
          result = randomNumber1 - randomNumber2;
          // await setAnswer(result);
      } else {
          console.error("Invalid sign or unexpected values");
          return;
      }
  
      await setAnswer(result);
      console.log("firstNumber", randomNumber1)
      console.log("secondNumber", randomNumber2)
      console.log("sign", randomSign)
      console.log("Calculated answer:", result);
      // console.log("State of answer:", answer);
  };

    calculateAndSetAnswer3(randomNumber1, randomNumber2, randomSign); // Call the async function
    break;
    // case 'multdiv':
    //   randomNumber1 = Math.floor(Math.random() * 10) + 1;
    //   randomNumber2 = Math.floor(Math.random() * 10) + 1;
    //   signs = ['+', '-'];
    //   randomSign = signs[Math.floor(Math.random() * signs.length)];
    //   setFirstNumber(randomNumber1);
    //   setSecondNumber(randomNumber2);
    //   setSign(randomSign);
  
    //   const calculateAndSetAnswer1 = async () => {
    //     if (typeof sign === "undefined" || typeof randomNumber1 === "undefined" || typeof randomNumber2 === "undefined") {
    //         console.error("One or more required variables are undefined");
    //         return;
    //     }
    
    //     let result;
    
    //     if (randomSign === "+") {
    //         result = randomNumber1 + randomNumber2;
    //       // await  setAnswer(result);
    //     } else if (randomSign === "-" && randomNumber2 >= randomNumber1) {
    //         result = randomNumber2 - randomNumber1;
    //         // await setAnswer(result);
    //     } else if (randomSign === "-" && randomNumber1 >= randomNumber2) {
    //         result = randomNumber1 - randomNumber2;
    //         // await setAnswer(result);
    //     } else {
    //         console.error("Invalid sign or unexpected values");
    //         return;
    //     }
    
    //     await setAnswer(result);
    //     console.log("firstNumber", randomNumber1)
    //     console.log("secondNumber", randomNumber2)
    //     console.log("sign", randomSign)
    //     console.log("Calculated answer:", result);
    //     // console.log("State of answer:", answer);
    // };
  
    //   calculateAndSetAnswer1(randomNumber1, randomNumber2, randomSign); // Call the async function
    //   break;
      case 'add1':
         randomNumber1 = Math.floor(Math.random() * 10) + 1;
         randomNumber2 = Math.floor(Math.random() * 10) + 1;
         signs = ['+'];
        endResult = randomNumber1 + randomNumber2;
        setFirstNumber(randomNumber1);
        setSecondNumber(randomNumber2);
        setSign(signs);
        setAnswer(endResult);
       
      break;
      case 'add2':
         randomNumber1 = Math.floor(Math.random() * 100) + 1;
        randomNumber2 = Math.floor(Math.random() * 10) + 1;
        signs = ['+'];
        endResult = randomNumber1 + randomNumber2;
        setFirstNumber(randomNumber1);
        setSecondNumber(randomNumber2);
        setSign(signs);
        setAnswer(endResult);
        break;
      case 'add3':
        randomNumber1 = Math.floor(Math.random() * 100) + 1;
        randomNumber2 = Math.floor(Math.random() * 100) + 1;
        signs = ['+'];
        endResult = randomNumber1 + randomNumber2;
        setFirstNumber(randomNumber1);
        setSecondNumber(randomNumber2);
        setSign(signs);
        setAnswer(endResult);
        break;
      default:
        console.warn(`Unknown resource type: ${type}`);
    }
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
  }
};

const randomEncouragement = ()=> {
  let links = ['Good Try!','Better luck next time.','Keep practicing.','Do not give up, you will get this!'];
  
const randomLink = links[Math.floor(Math.random() * links.length)];
setFeedback(randomLink); // Update gif state
// randomGif(); // Call to get a random gif when correct
console.log(randomLink);
}
  const wrong = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } else {
      console.log("Count is already at its minimum value.");
    }
    setGif([]);
    randomEncouragement(); // Call to get a random gif when correct 
  };

  const reset = () => {
    setCount(0);
    setGif([]); // Reset gif state to empty
  };


  return (
    <TrackerContext.Provider value={{ correct, wrong, reset, count,
     gif, target, setTarget, percentageToGoal, answer ,
     firstnumber, secondnumber, highestNumber, sign , feedback, getProblems }}>
      {children}
    </TrackerContext.Provider>
  );
};
