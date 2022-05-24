import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Header() {
  function navRender() {
    if (Auth.loggedIn()) {
      return (
        <nav>
          <Link to="/" onClick={() => Auth.logout()}>
            Logout
          </Link>
        </nav>
      );
    }
    return (
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About Us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
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
