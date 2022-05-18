import React from 'react';
import { Route, Routes, Router, Link } from 'react-router-dom';
import Login from '../Login';

const bankingLaptop = 'https://media.istockphoto.com/photos/man-using-online-banking-with-credit-card-on-touch-screen-device-picture-id962095876?k=20&m=962095876&s=612x612&w=0&h=yzt6qDr5tnD-vMBMiM_IMYXVPCRnfULnrFy_54w0ooM='
const bankingImage = {
  backgroundImage: `url(${bankingLaptop})`,
  'background-size': 'cover',
  'display': 'flex',
  'justify-content': 'center'
};

function Home() {
  return (
    <section>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style={bankingImage}>
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal border border-dark bg-light rounded bg-opacity-50">Punny banking headline</h1>
          <p class="lead font-weight-normal border border-dark bg-light">Control and grow your money with us!</p>

          <div class="btn-group bg-light rounded">
              <button type="button" class="btn btn-sm btn-outline-secondary">Login or Sign-up!</button>
          </div>

        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>

    </section>
  );
};

{/* an a tag that renders the login page */ }

export default Home;