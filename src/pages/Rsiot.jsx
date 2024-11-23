import React from 'react';

import Header from '../components/Header';
import '../pages/accueil.css';
import ModuleForm from '../components/ModuleForm';

const Rsiot = () => {
    return (
        <div className='reseau'>
            <Header />

            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 >RESEAU </h1>
                        

                        

                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/Data Storage 2.svg" alt="" />
                    </div>
                </div>
            </div>
            <p>Veuillez remplir le formulaire
                        
            </p>
            
            <ModuleForm />
        </div>
    );
};

export default Rsiot;