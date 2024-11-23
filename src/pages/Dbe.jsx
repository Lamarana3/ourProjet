import React from 'react';
import Header from '../components/Header';
import '../pages/accueil.css';
import ModuleForm from '../components/ModuleForm';

const Dbe = () => {
    return (
        <div className='backend'>
            <Header />
            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 >DEVELOPPEMENT BACKEND </h1>
                        

                        

                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/Coding.svg" alt="" />
                    </div>
                </div>
            </div>
            <p>Veuillez remplir le formulaire
                        
            </p>
            <ModuleForm />
            
        </div>
    );
};

export default Dbe;