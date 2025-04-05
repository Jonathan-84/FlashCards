// import React from 'react';
// import Tracker from './tracker';
// import Mixed from './Math/Mixed';
// // import {TrackerProvider} from './TrackerContext';

// class TrackerWrap extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       gif: []
//     };
//   }

  
//   randomKudos = () => {
//     var links = [
//       'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/Blueyfloss.gif',
//       // other links...
//     ];

//     let randomLink = links[Math.floor(Math.random() * links.length)];
//     this.setState({ gif: randomLink });
//   }

//   correct = () => {
//     if (this.state.count < 10) {
//       this.randomKudos();
//       this.setState({ count: this.state.count + 1 });
//     }
//   }

//   resetgif = () => {
//     var options = [''];
//     let scratch = options[Math.floor(Math.random() * options.length)];
//     this.setState({ gif: scratch });
//   }

//   reset = () => {
//     this.resetgif();
//     this.setState({ count: 0 });
//   }

//   wrong = () => {
//     if (this.state.count > 0) {
//       this.setState({ count: this.state.count - 1 });
//     }
//   }


//   render() {
//     const { count, gif } = this.state;

//     return (
//       // <TrackerProvider>
//         <div className='mb-0'>
//           <div className="col d-flex justify-content-center mt-3 ">
//             <div className="card text-white bg-warning mb-1 d-flex justify-content-center col col-md-4">
//               <Tracker count={count} gif={gif} reset={this.reset} wrong={this.wrong} />
//             </div>
//           </div>
//           {/* <Mixed first={1} second={2} operator={'+'} /> */}
//           <Mixed wrong={this.wrong()} correct={this.correct()} />
//         </div>   
//       // </TrackerProvider>
//     );
//   }
// }

// export default TrackerWrap;