import React from "react";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="flex-column">
      <div id="hero" className="col mb-2"></div>
      <About />
      <Testimonials />
    </div>
  );
}

export default Home;
