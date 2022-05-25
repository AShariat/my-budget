import React from "react";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import HeroImage from '../assets/images/homepage.jpg';

const imageStyle = {
 
}

function Home() {
  return (
    <div className="flex-column">
        <div className="jumbotron mt-2 mx-3 d-flex flex-column align-items-center" id='hero' alt='finance image'>
            <h1 id='opaque' className='m-2 p-2 rounded opacity-25'>Don't normally like dealing with banking details?</h1>
            <h4 id='opaque' className='m-2 p-2 rounded'>You are not a loan!</h4>
      </div>

      <About />
      <Testimonials />
    </div>
  );
}

export default Home;
