import react, { createContext, useState } from 'react';

export const TrackerContext = createContext();

export const TrackerProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [gif, setGif] = useState([]);
  const [target, setTarget] = useState(10);
  const [percentageToGoal, setPercentageToGoal] = useState(10);
  const [feedback, setFeedback] = useState("");
  // const [positiveFeedback, setPositiveFeedback] = useState("");

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
    <TrackerContext.Provider value={{ correct, wrong, reset, count, gif, target, setTarget, percentageToGoal,feedback }}>
      {children}
    </TrackerContext.Provider>
  );
};
