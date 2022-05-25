import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="container d-flex justify-content-md-between">
      <h1>
        <Link to="/">
          <i className="bi bi-currency-exchange"></i> My Budget
        </Link>
      </h1>
      <nav className="text-center d-inline-flex p-2 align-items-end">
        {Auth.loggedIn() ? (
          <>
            <h4 className="px-3">
              <Link to="/dashboard">Dashboard</Link>
            </h4>
            <a href="/" onClick={logout}>
              <h4 className="px-3">Logout</h4>
            </a>
          </>
        ) : (
          <>
            <h4 className="px-3">
              <Link to="/about">About Us</Link>
            </h4>
            <h4 className="px-3">
              <Link to="/testimonials">Testimonials</Link>
            </h4>
            <h4 className="px-3">
              <Link to="/login">Login</Link>
            </h4>
            <h4 className="px-3">
              <Link to="/signup">Signup</Link>
            </h4>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
