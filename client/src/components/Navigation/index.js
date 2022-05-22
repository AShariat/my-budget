import React from 'react';

function Navigation(props) {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" onClick={() => { props.changeFunction('Home')}}><i class="bi bi-currency-exchange"></i>My Budget Tracker</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => { props.changeFunction('About') }}>About Us<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => {props.changeFunction('Testimonials')}}>Testimonials<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => {props.changeFunction('Login')}}>Login<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

/* add a ternary to check if logged in and if logged in have the user see a log out button instead? */