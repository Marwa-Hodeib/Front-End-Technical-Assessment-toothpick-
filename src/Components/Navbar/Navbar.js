import React from 'react';
import './Navbar.css';


const navbar = props => (
    <header className="navbar">
        <nav className="navigation">
                <div></div>
                <div className="main-logo"><img src="/Images/main-logo.svg" alt='logo'/></div>
                <div className= "space-between"></div>

                <div className="navigation-items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Download</a></li>
                        <li><a href="/">For Business</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
        </nav>
    </header>
);

export default navbar;