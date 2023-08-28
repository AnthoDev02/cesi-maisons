import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ title }) => {
    
    const { state } = useLocation();
    console.log(state);

    return (
        <header className="header mb-5">
            <img src="Images/cesi.png" alt="logo" />
            <div className="header-right">
                {title === "CLASSEMENT" && 
                    <div className="connexion">
                        {state === null ? 
                            <Link to="/Authentication" > Connexion </Link>
                            :
                            <p>Hello {state}</p>
                        }
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