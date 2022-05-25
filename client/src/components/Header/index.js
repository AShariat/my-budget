import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="col mt-1 mb-3 py-2 d-flex bg-dark justify-content-between">
      <h1>
        <Link className="text-white" to="/">
          <i className="bi bi-currency-exchange text-white"></i> My Budget
        </Link>
      </h1>
      <nav className="text-center d-inline-flex p-2 align-items-end">
        {Auth.loggedIn() ? (
          <>
            <h4 className="px-3">
              <Link className="text-white" to="/dashboard">
                Dashboard
              </Link>
            </h4>
            <a className="text-white" href="/" onClick={logout}>
              <h4 className="px-3">Logout</h4>
            </a>
          </>
        ) : (
          <>
            <h4 className="px-3">
              <Link className="text-white" to="/about">
                About Us
              </Link>
            </h4>
            <h4 className="px-3">
              <Link className="text-white" to="/testimonials">
                Testimonials
              </Link>
            </h4>
            <h4 className="px-3">
              <Link className="text-white" to="/login">
                Login
              </Link>
            </h4>
            <h4 className="px-3">
              <Link className="text-white" to="/signup">
                Signup
              </Link>
            </h4>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
