import React from 'react';
import './Navbar.css';


const header = () => (
    <header className="header-wrapper">
     
                <div></div>
                <div className="header-logo"><img src="/Images/main-logo.svg" alt='logo'/></div>
                <div className= "space-between"></div>

                <div className="navigation-items">
                    <ul>
                        <li className="header-link"><a href="/">Home</a></li>
                        <li className="header-link"><a href="/">How it Works</a></li>
                        <li className="header-link"><a href="/">About</a></li>
                        <li className="header-link"><a href="/">Download</a></li>
                        <li className="header-link"><a href="/">For Business</a></li>
                        <li className="header-link"><a href="/">Contact</a></li>
                    </ul>
                </div>
    
    </header>
);

export default header;