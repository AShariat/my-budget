import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

function Home() {
  return (
    <section>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 font-weight-normal">Punny banking headline</h1>
          <p class="lead font-weight-normal">Control and grow your money with us!</p>



        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>

    </section>
  );
};

{/* an a tag that renders the login page */}

export default Home;