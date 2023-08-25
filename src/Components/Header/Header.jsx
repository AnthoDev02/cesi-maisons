import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header mb-5">
            <img src="Images/cesi.png" alt="logo" />
            <div className="header-right">
                <div className="connexion">
                    <Link to="/Authentication" > Connexion </Link>
                </div>
                <div className="title">
                    CLASSEMENT
                </div>
            </div>
        </header>
    )
}

export default Header;