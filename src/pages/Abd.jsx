import React from 'react';
import Header from '../components/Header';
import '../pages/accueil.css';
import ModuleForm from '../components/ModuleForm';

const Abd = () => {
    return (
        <div className='database'>
            <Header />

            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 >ANALYSE DE BASE DE DONNEES </h1>
            

                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/Data Center.svg" alt="" />
                    </div>
                </div>
            </div>
            
            <p>Veuillez remplir le formulaire
                        
            </p>
            <ModuleForm />

            
            
        </div>
    );
};

export default Abd;