import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

const TwentyFiveOnSides = {
    'margin-left': '35%',
    'margin-right': '35%',
    'width': '30%'
};

function Signup(props) {
    window.scrollTo(0, 0);

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                email: formState.email,
                password: formState.password,
                // firstName: formState.firstName,
                // lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <section className="text-center">
            <form className="form-signup column" onSubmit={handleFormSubmit}>
                <img className="mb-4 mt-4" src="https://www.svgrepo.com/show/32717/currency-exchange.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>

                <label for="inputUsername" className="sr-only">Username</label>
                <input
                    style={TwentyFiveOnSides}
                    type="username"
                    id="inputUsername"
                    className="form-control my-2"
                    placeholder="Username"
                    name="username"
                    required=""
                    onChange={handleChange}
                />

                <label for="inputEmail" className="sr-only">Email address</label>
                <input
                    style={TwentyFiveOnSides}
                    type="email"
                    id="inputEmail"
                    className="form-control my-2"
                    placeholder="Email address"
                    name="email"
                    required=""
                    autofocus=""
                    onChange={handleChange}
                />

                <label for="inputPassword" className="sr-only">Password</label>
                <input
                    style={TwentyFiveOnSides}
                    type="password"
                    id="inputPassword"
                    className="form-control my-2"
                    placeholder="Password"
                    name="password"
                    required=""
                    onChange={handleChange}
                />

                <button style={TwentyFiveOnSides} id='signUpModal' className="btn btn-lg btn-secondary btn-block" type="submit" onClick={() => { props.changeFunction('Signup') }}>Sign Up</button>

                <p className="mt-3 mb-3 text-muted">My Budget © 2022-2022</p>
            </form>
        </section>
    );
};

export default Signup;