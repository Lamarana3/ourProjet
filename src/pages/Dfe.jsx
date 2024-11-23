import React from 'react';
import '../pages/accueil.css';

import Header from '../components/Header';
import ModuleForm from '../components/ModuleForm';


const Dfe = () => {
    return (
        <div className='frontend'>
            <Header />

            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 >DEVELOPPEMENT FRONTEND </h1>
                        

                        

                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/Coding 3.svg" alt="" />
                    </div>
                </div>
            </div>
            <p>Veuillez remplir le formulaire
                        
            </p>
            
            <ModuleForm />
        </div>
    );
};

export default Dfe;