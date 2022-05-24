import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Header() {
  function navRender() {
    if (Auth.loggedIn()) {
      return (
        <nav className="container d-flex">
          <h4>
            <Link to="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </h4>
        </nav>
      );
    }
    return (
      <nav className="container d-flex">
        <h4>
          <Link to="/dashboard">Dashboard</Link>
        </h4>
        <h4>
          <Link to="/about">About Us</Link>
        </h4>
        <h4>
          <Link to="/testimonials">Testimonials</Link>
        </h4>
        <h4>
          <Link to="/login">Login</Link>
        </h4>
        <h4>
          <Link to="/signup">Signup</Link>
        </h4>
      </nav>
    );
  }

  return (
    <header className="container d-flex">
      <h1>
        <Link to="/">
          <i className="bi bi-currency-exchange"></i> My Budget
        </Link>
      </h1>
      {navRender()}
    </header>
  );
}

export default Header;
