import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Header(props) {

  function showHeader() {
    if (Auth.loggedIn()) {
      return (
        //   <a
        //   className="nav-link"
        //   href="/" onClick={() => Auth.logout()}>
        //   Logout<span className="sr-only">(current)</span>
        // </a>
        <Link to="/" onClick={() => Auth.logout()}>Logout</Link>
      );
    } else {
      return (
        <Link to="/about">About</Link>,
        <Link to="/testimonials">Testimonials</Link>,
        <Link to="/login">Login</Link>,
        <Link to="/signup">Signup</Link>
      );
    }
  }

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>
            <i className="bi bi-currency-exchange"></i> My Budget
          </h1>
        </Link>
        <nav className="text-center">
          {showHeader()}
        </nav>
      </div>
    </header>
  );
}

export default Header;