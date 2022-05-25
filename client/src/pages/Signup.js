import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
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
          placeholder="Your Username"
          name="username"
          type="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
        />
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
          Sign Up
        </button>
      </form>
      {error && (
        <h3 className="text-danger text-center mt-5">
          Sign Up Failed! {error.message}
        </h3>
      )}
    </div>
  );
};

export default Signup;
