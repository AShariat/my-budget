import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TRANSACTIONS } from "../../utils/queries";

const bankingLaptop =
  "https://media.istockphoto.com/photos/man-using-online-banking-with-credit-card-on-touch-screen-device-picture-id962095876?k=20&m=962095876&s=612x612&w=0&h=yzt6qDr5tnD-vMBMiM_IMYXVPCRnfULnrFy_54w0ooM=";
const bankingImage = {
  backgroundImage: `url(${bankingLaptop})`,
  "background-size": "cover",
  display: "flex",
  "justify-content": "center",
};

const transparency = {
  opacity: 0.5,
};

function Home(props) {
  window.scrollTo(0, 0);

  const { loading, data } = useQuery(QUERY_TRANSACTIONS);
  const transactions = data?.transactions || [];

  return (
    <section>
      <div
        className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
        style={bankingImage}
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5 opacity-50">
          <h1 className="display-4 font-weight-normal border border-dark bg-light rounded">
            Not interested in online banking?
          </h1>
          <p className="lead font-weight-normal border border-dark bg-light">
            You are not a loan!
          </p>

          <div className="btn-group bg-light rounded">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => {
                props.changeFunction("Login");
              }}
            >
              Login or Sign-up!
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => console.log(transactions)}
            >
              Test
            </button>
          </div>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
    </section>
  );
}

{
  /* an a tag that renders the login page */
}

export default Home;
