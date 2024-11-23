import React from 'react';
import Header from '../components/Header';
import '../pages/accueil.css';

const Responsable = () => {
    return (
        <div className='role'>
            <Header />
            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 >Liste DE FICHES </h1>
                        <p>Bonjour! Aissatou Diallo
                        
                        </p>
                        <Link to="/listeFiche" className='btn btn-primary'>Voir fiche</Link>

                        

                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/responsable.svg" alt="" />
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Responsable;