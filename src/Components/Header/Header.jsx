import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="header mb-5">
            <img src="Images/cesi.png" alt="logo" />
            <div class="header-right">
                <div class="connexion">
                    <Link to="/Authentication" > Connexion </Link>
                </div>
                <div class="title">
                    CLASSEMENT
                </div>
            </div>
        </header>
    )
}

export default Header;