import React from 'react';
import '../components/sidebare.css';
import { BiArchive, BiHome, BiMessage, BiSolidGraduation, BiUser } from 'react-icons/bi';


const Sidebare = () => {
    return (
        <div className="menu">
            <div className="logo">
                <h2>EduCode</h2>
            </div>
            <div className="menu--list">
                <a href="/" className='item'>
                    <BiHome className='icone' />
                    Accueil
                </a>
                <a href="/message" className='item'>
                   <BiMessage className='icone' />
                    Message
                </a>
                <a href="/list" className='item'>
                   <BiSolidGraduation className='icone' />
                    Formateurs
                </a>
                <a href="tableau" className='item active'>
                   <BiUser className='icone' />
                    Profile
                </a>
                <a href="archive" className='item'>
                   <BiArchive className='icone' />
                    Archive
                </a>

            </div>
            <a href="#"><button className='btn'>
                <BiUser className='icone' />
                Connexion</button>
            </a>
            
        </div>
    );
};

export default Sidebare;