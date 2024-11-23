import React from 'react';
import Header from '../components/Header';
import '../pages/accueil.css';
import ModuleForm from '../components/ModuleForm';

const Apd = () => {
    return (
        <div className='analyse'>

            <Header />


            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 >ANALYSE DES PERFORMENCES DIJITALES </h1>
                        

                        

                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/Customer Service (1).svg" alt="" />
                    </div>
                </div>
            </div>
            <p>Veuillez remplir le formulaire
                        
            </p>
            <ModuleForm />
            
        </div>
    );
};

export default Apd;