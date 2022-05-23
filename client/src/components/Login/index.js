import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';

const TwentyFiveOnSides = {
    'margin-left': '35%',
    'margin-right': '35%',
    'width': '30%'
};

function Login(props) {
    window.scrollTo(0, 0);

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
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
            <form className="form-signin column" onSubmit={handleFormSubmit}>
                <img className="mb-4 mt-4" src="https://www.svgrepo.com/show/32717/currency-exchange.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <label for="inputEmail" className="sr-only">Email address</label>
                <input
                    style={TwentyFiveOnSides}
                    type="email" id="inputEmail"
                    className="form-control my-2"
                    placeholder="Email address"
                    required=""
                    autofocus=""
                    name="email"
                    onChange={handleChange}
                />

                <label for="inputPassword" className="sr-only">Password</label>
                <input
                    style={TwentyFiveOnSides}
                    type="password"
                    id="inputPassword"
                    className="form-control my-2"
                    placeholder="Password"
                    required=""
                    name="password"
                    onChange={handleChange}
                />
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <button
                    style={TwentyFiveOnSides}
                    className="btn btn-lg btn-dark btn-block"
                    type="submit">Sign in</button>

                <p className="mt-3 mb-3 text-muted">My Budget © 2022-2022</p>
            </form>
        </section>
    );
};

export default Login;