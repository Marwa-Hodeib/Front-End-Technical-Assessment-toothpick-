import React from 'react';
import './Header.css';


const Header = () => (
    <header className="header-wrapper">
        <div className="header-logo"><img className="header-logo-image" src="/Images/main-logo.svg" alt='logo'/></div>
        

        <nav className="header-navigation-items">
            <ul>
                <li className="header-link"><a href="#home">Home</a></li>
                <li className="header-link"><a href="#how">How it Works</a></li>
                <li className="header-link"><a href="#about">About</a></li>
                <li className="header-link"><a href="#download">Download</a></li>
                <li className="header-link"><a href="#business">For Business</a></li>
                <li className="header-link"><a href="#contact">Contact</a></li>
            </ul>
        </nav>

    </header>
);

export default Header;
