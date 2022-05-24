import React from "react";
import Auth from "../../utils/auth";



/* add a ternary to check if logged in and if logged in have the user see a log out button instead? */

function Navigation(props) {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/" onClick={() => Auth.logout()}>
              Logout<span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                props.changeFunction("About");
              }}
            >
              About Us<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                props.changeFunction("Testimonials");
              }}
            >
              Testimonials<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                props.changeFunction("Login");
              }}
            >
              Login<span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand"
        onClick={() => {
          props.changeFunction("Home");
        }}
      >
        <i className="bi bi-currency-exchange"></i> My Budget
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {showNavigation()}
    </nav>
  );
}

export default Navigation;








