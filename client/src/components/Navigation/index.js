import React from 'react';

function Navigation(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" onClick={() => { props.changeFunction('Home')}}><i className="bi bi-currency-exchange"></i>My Budget Tracker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => { props.changeFunction('About') }}>About Us<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => {props.changeFunction('Testimonials')}}>Testimonials<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => {props.changeFunction('Login')}}>Login<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

/* add a ternary to check if logged in and if logged in have the user see a log out button instead? */