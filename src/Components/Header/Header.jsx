import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ title }) => {
    return (
        <header className="header mb-5">
            <img src="Images/cesi.png" alt="logo" />
            <div className="header-right">
                {title === "CLASSEMENT" && 
                    <div className="connexion">
                    <Link to="/Authentication" > Connexion </Link>
                    </div>
                }
                <div className="title">
                    {title}
                </div>
            </div>
        </header>
    )
}

export default Header;