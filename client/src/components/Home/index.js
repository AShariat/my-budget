import React from "react";

// const bankingLaptop =
//   "https://media.istockphoto.com/photos/man-using-online-banking-with-credit-card-on-touch-screen-device-picture-id962095876?k=20&m=962095876&s=612x612&w=0&h=yzt6qDr5tnD-vMBMiM_IMYXVPCRnfULnrFy_54w0ooM=";
// const bankingImage = {
//   backgroundImage: `url(${bankingLaptop})`,
//   "background-size": "cover",
//   display: "flex",
//   "justify-content": "center",
// };

function Home(props) {
  window.scrollTo(0, 0);

  return (
<<<<<<< HEAD
    <section>
      <div
        className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
        // style={bankingImage}
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5 opacity-50">
          <h1 className="display-4 font-weight-normal border border-dark bg-light rounded">
            Not interested in online banking?
          </h1>
          <p className="lead font-weight-normal border border-dark bg-light">
            {/* ${total} */}
          </p>

          <div className="btn-group bg-light rounded">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => {
                props.changeFunction("Login");
              }}
            >
              Login!
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => {
                props.changeFunction("Signup");
              }}
            >
              Sign-up!
            </button>
          </div>
          <br></br>
          <div className="btn-group bg-dark rounded m-2">
            <button
              type="button"
              className="btn btn-lg btn-outline-secondary text-light"
              onClick={() => {
                props.changeFunction("About");
              }}
            >
              About us
            </button>
          </div>
          <div className="btn-group bg-dark rounded m-2">
            <button
              type="button"
              className="btn btn-lg btn-outline-secondary text-light"
              onClick={() => {
                props.changeFunction("Testimonials");
              }}
            >
              Read our testimonials
            </button>
          </div>
        </div>
=======
    <div
      className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
      // style={bankingImage}
    >
      <div className="col-md-5 p-lg-5 mx-auto my-5 opacity-50">
        <h1 className="display-4 font-weight-normal border border-dark bg-light rounded">
          Not interested in online banking?
        </h1>
        <p className="lead font-weight-normal border border-dark bg-light">
          You are not a loan!
        </p>
        <div className="btn-group bg-light rounded"></div>
>>>>>>> develop
      </div>
    </div>
  );
}

export default Home;
