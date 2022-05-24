import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // function navRender() {
  //   if (Auth.loggedIn()) {
  //     return (
  //       <nav className="container d-flex">
  //         <h4>
  //           <Link to="/" onClick={() => Auth.logout()}>
  //             Logout
  //           </Link>
  //         </h4>
  //       </nav>
  //     );
  //   }
  //   return (
  //     <nav className="container d-flex">
  //       <h4>
  //         <Link to="/dashboard">Dashboard</Link>
  //       </h4>
  //       <h4>
  //         <Link to="/about">About Us</Link>
  //       </h4>
  //       <h4>
  //         <Link to="/testimonials">Testimonials</Link>
  //       </h4>
  //       <h4>
  //         <Link to="/login">Login</Link>
  //       </h4>
  //       <h4>
  //         <Link to="/signup">Signup</Link>
  //       </h4>
  //     </nav>
  //   );
  // }

  return (
    <header className="container d-flex">
      <h1>
        <Link to="/">
          <i className="bi bi-currency-exchange"></i> My Budget
        </Link>
      </h1>
      {/* {navRender()} */}
      <nav className="text-center">
        {Auth.loggedIn() ? (
          <>
            <h4>
              <Link to="/dashboard">Dashboard</Link>
            </h4>
            <a href="/" onClick={logout}>
              <h4>Logout</h4>
            </a>
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
