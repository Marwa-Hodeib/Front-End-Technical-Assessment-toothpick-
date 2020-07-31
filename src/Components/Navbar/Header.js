import React from 'react';
import './Header.css';


const Header = () => (
    <header className="header-wrapper">
     
    <div></div>
    <div className="header-logo"><img src="/Images/main-logo.svg" alt='logo'/></div>
    

    <nav className="header-navigation-items">
        <ul>
            <li className="header-link"><a href="/">Home</a></li>
            <li className="header-link"><a href="/">How it Works</a></li>
            <li className="header-link"><a href="/">About</a></li>
            <li className="header-link"><a href="/">Download</a></li>
            <li className="header-link"><a href="/">For Business</a></li>
            <li className="header-link"><a href="/">Contact</a></li>
        </ul>
    </nav>

</header>
);

export default Header;