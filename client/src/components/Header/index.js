import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Header() {
  function navRender() {
    if (Auth.loggedIn()) {
      return (
        <nav className="text-center">
          <Link to="/" onClick={() => Auth.logout()}>
            Logout
          </Link>
        </nav>
      );
    }
    return (
      <nav className="text-center">
        <Link to="/about">About Us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    );
  }

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>
          <Link to="/">
            <i className="bi bi-currency-exchange"></i> My Budget
          </Link>
        </h1>
        {navRender()}
      </div>
    </header>
  );
}

export default Header;
