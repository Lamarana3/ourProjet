
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/headerone.css';

const Headerone = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen === true) {
            
        }
        
    };
    return (
        <div className='sidebar'>
            <header>
                <button className="menu-icon" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <h1 className='moi'>EDUCODE</h1>
                
                <nav className={isOpen ? 'open' : ''}>
                    <ul>
                        <li><Link to="/"><i className="fas fa-home"></i>ACCUEIL</Link></li>
                        
                        <li><Link to="/formateur"><i className="fas fa-chalkboard-teacher"></i>
                        FORMATEURS
                        </Link></li>
                        <li><Link to="/filiere"><i className="fas fa-graduation-cap"></i>
                        FILIERES</Link></li>
                        <li><Link to="/Profile"><i className=""></i>
                        PROFILE</Link></li>
                        <li><Link to="/archive"><i className="fas fa-archive"></i> 
                        ARCHIVE</Link></li>
                        <li><Link to="/message"><i className="fas fa-envelope"></i>MESSAGE</Link></li>

                        
                        <li><Link to="aide"> <i className="fas fa-question-circle"></i>AIDE</Link></li>
                        
                    </ul>
                </nav>
            </header> 
            
        </div>
    );
};

export default Headerone;