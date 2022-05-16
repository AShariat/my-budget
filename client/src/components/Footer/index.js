import React from 'react';
const neverUnderline = {
    'text-decoration': 'none',
    'color': 'black'
};

function Footer() {
    return (
        <footer className='flex-row'>
            <nav className="navbar fixed-bottom navbar-light bg-light justify-content-center">
                <a style={neverUnderline} href="https://github.com/AShariat/my-budget"><p>Check out our code! <i class="bi bi-github"></i></p></a>
            </nav>
        </footer>
    );
};


export default Footer;