import React from "react";

const bankingLaptop =
  "https://static.wixstatic.com/media/11062b_6ed150d7b33842c5938db540a502ea15~mv2.jpg";
const bankingImage = {
  backgroundImage: `url(${bankingLaptop})`,
  "background-size": "cover",
  display: "flex",
  "justify-content": "center",
};
const backdropFilter = {
  backdropFilter: "blur(5px)", backgroundColor:"rgba(255,255,255,0.3)",
  textShadow: "0 0 1px #FFFFFF"
};

function Home(props) {
  window.scrollTo(0, 0);

  return (
    <div
      className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
      style={bankingImage}
    >
      <div className="w-50 mx-auto my-5">
        <h1 className="display-4 font-weight-normal rounded p-3 overflow-hidden" style={backdropFilter}>
          Not interested in online banking?
        </h1>
        <p className="lead font-weight-normal my-4 rounded" style={backdropFilter}>
          You are not a loan!
        </p>
        <div className="btn-group bg-light rounded"></div>
      </div>
    </div>
  );
}

export default Home;
