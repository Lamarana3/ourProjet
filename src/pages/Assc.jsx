import React from 'react';
import Header from '../components/Header';
import '../pages/accueil.css';
import ModuleForm from '../components/ModuleForm';


const Assc = () => {
    return (
        <div className='systeme'>
            <Header />

            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 >ANALYSE SYSTEME SECURITE C.. </h1>
                        

                        

                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/Data Maintenance.svg" alt="" />
                    </div>
                </div>
            </div>
            <p>Veuillez remplir le formulaire
                        
            </p>
            <ModuleForm />
            
        </div>
    );
};

export default Assc;