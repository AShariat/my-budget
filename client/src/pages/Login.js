import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  window.scrollTo(0, 0);

  return (
    <div className="container-fluid my-5 w-75">
      <form className="container-fluid" onSubmit={handleFormSubmit}>
        <input
          className="col mb-2"
          placeholder="Your Email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          className="col mb-2"
          placeholder="Your Password"
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button className="col btn btn-dark" type="submit">
          Login
        </button>

        <Link to="/signup">
          <button className="col btn btn-dark my-2" type="Sign-Up">
            Sign-Up
          </button>
        </Link>
      </form>
      {error && (
        <h3 className="text-danger text-center mt-5">
          Login Failed! {error.message}
        </h3>
      )}
    </div>
  );
};

export default Login;
