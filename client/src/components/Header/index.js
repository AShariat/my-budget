import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-dark">
      <h1>
        <Link className="text-white" to="/">
          <i className="bi bi-currency-exchange text-white"></i> My Budget
        </Link>
      </h1>
      <nav className="text-center my-2 d-flex align-items-center">
        {Auth.loggedIn() ? (
          <>
            <h4 className="px-3">
              <Link className="text-white p-1 rounded" to="/dashboard">
                Dashboard
              </Link>
            </h4>
            <h4 className="px-3">
              <a className="text-white p-1 rounded" href="/" onClick={logout}>
                Logout
              </a>
            </h4>
          </>
        ) : (
          <>
            <h4 className="px-3">
              <Link className="text-white p-1 rounded" to="/login">
                Login
              </Link>
            </h4>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
