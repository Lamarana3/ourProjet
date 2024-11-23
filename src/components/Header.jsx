import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="header">
            <input type="checkbox" className="check" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo">Educode</label>
            <div className="container">
                <ul className="main-menu">
                    <li><a className="active" href="/">Accueil</a></li>
                    <li><a href="/message">Fiches</a></li>
                    <li><a href="/list">Formateurs</a></li>
                    <li><a href="/tableau">Profile</a></li>
                    <li><a href="/archive">Archives</a></li>
                    <li className="menu-button">
                        {isHomePage ? (
                            <a href="/register"><button className="btn">Connexion</button></a>
                        ) : (
                            <a href="/"><button className="btn">Déconnexion</button></a>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
