import React from "react";
import About from "../About";
import Testimonials from "../Testimonials";

// const bankingLaptop =
//   "https://static.wixstatic.com/media/11062b_6ed150d7b33842c5938db540a502ea15~mv2.jpg";
// const bankingImage = {
//   backgroundImage: `url(${bankingLaptop})`,
//   "background-size": "cover",
//   display: "flex",
//   "justify-content": "center",
// };
// const backdropFilter = {
//   backdropFilter: "blur(5px)",
//   backgroundColor: "rgba(255,255,255,0.3)",
//   textShadow: "0 0 1px #FFFFFF",
// };

function Home(props) {
  window.scrollTo(0, 0);

  return (
    <div className="flex-column">
      <div id="hero" className="col mb-2">
        {/* <h1
          className="display-4 font-weight-normal rounded p-3 overflow-hidden"
          style={backdropFilter}
        >
          Not interested in online banking?
        </h1>
        <p
          className="lead font-weight-normal my-4 rounded"
          style={backdropFilter}
        >
          You are not a loan!
        </p>
        <div className="btn-group bg-light rounded"></div> */}
      </div>
      <About />
      <Testimonials />
    </div>
  );
}

export default Home;
