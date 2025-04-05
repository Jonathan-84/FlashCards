
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Tabs, Tab, Container, Col, Row } from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

// import multi1 from '../Assets/MultLvl1.jpg'; // gives image path
// import multi2 from '../Assets/MultLvl2.jpg'; // gives image path
// import multi3 from '../Assets/MultLvl3.jpg'; // gives image path
import MultDivTest1 from '../Components/Math/multdivtest1.js';

import AddSub1Test from '../Components/Math/mixed1.js'; // Importing the AddSub1Test component for level 1
import AddSub2Test from '../Components/Math/mixed2.js'; // Importing the AddSub2Test component for level 2  
import AddSub3Test from '../Components/Math/mixed3.js'; // Importing the AddSub3Test component for level 3

import Tracker from '../Components/tracker.js'; // Importing the Tracker component to keep track of scores
// import mixed1 from '../Assets/MixedLvl1.jpg'; // gives image path
// import mixed2 from '../Assets/MixedLvl2.jpg'; // gives image path
// import mixed3 from '../Assets/MixedLvl3.jpg'; // gives image path

///// Need to update the images and clean up how I refer to sections
/// also need to add the level 2 for number identification 0-100
 
const Math = () => {


    
 
  return (
    <>
          <Tracker />
      
    <div className='mb-0'>
    <div className="col d-flex justify-content-center mt-3 ">
      {/*Text Container*/}      

    <h1 className="text-info"> Test Yourself </h1>

    
      </div>
  
      <Row className="mb-3" >
        <Col>

      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="addsub1" title="Add and Subtract: Lvl 1" >
      < AddSub1Test /> {/* Level 1 Test Component */}
      </Tab>
      <Tab eventKey="addsub2" title="Add and Subtract: Lvl 2">
       < AddSub2Test /> {/* Level 1 Test Component */}
      </Tab>
      <Tab eventKey="addsub3" title="Add and Subtract: Lvl 3">
      < AddSub3Test /> {/* Level 1 Test Component */}
      </Tab>
      <Tab eventKey="multdiv1" title="Multiply & Divide: Lvl 1">
      < MultDivTest1 /> {/* Level 1 Test Component */}
      </Tab>
      {/* <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab> */}
    </Tabs>
    </Col>
      </Row>


<br></br>
{/* <div className="container-fluid col-7 p-1 ">
<div className=" row d-flex justify-content-center align-items-center">
 <div className='row'>
 <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Addition/ Subtraction Test Level 1</h2>
<Link to={"/addsub1test"} className="nav-text"><img  width="400" height="300" alt="screenshot of multi 1" src={multi1}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> A random number (0-10) will be added or subtracted from a number from (0-10).
  </p>
 </div>
 <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Addition/ Subtraction Test Level 2</h2>
<Link to={"/addsub2test"} className="nav-text"><img  width="400" height="300" alt="screenshot of multi 1" src={multi2}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> A random number (0-100) will be added or subtracted from a number from (0-10).
  </p>
 </div>
 <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white h4'>Addition/ Subtraction Test Level 3</h2>
<Link to={"/addsub3test"} className="nav-text"><img  width="400" height="300" alt="screenshot of multi 3" src={multi3}  className="sightcard"/>
  </Link>
  <br></br>
  <br></br>
  <p className='text-white'> A random number (0-100) will be added or subtracted from a number from (0-100).
  </p>
 </div>

 </div>
</div>
</div> */}
</div>
<br></br>
  <br></br>
</>
  )
}
export default Math;
