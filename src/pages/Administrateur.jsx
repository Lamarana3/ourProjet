import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import api from '../api/axios'; 

const Administrateur = () => {
    const [fiches, setFiches] = useState([]);
    const [formateurs, setFormateurs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // cette methode permet de recuperer les fiches soumises
        api.get('/fiches')
            .then((response) => {
                setFiches(response.data);
            })
            .catch((error) => {
                setError('Erreur lors du chargement des fiches.');
                console.error(error);
            });

        //  pour recuperer la liste des formateurs
        api.get('/formateurs')
            .then((response) => {
                setFormateurs(response.data);
            })
            .catch((error) => {
                setError('Erreur lors du chargement des formateurs.');
                console.error(error);
            });
    }, []);

    return (
        <div className='role'>
            <Header />
            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1>Liste DE FICHES</h1>
                        <p>Bonjour! Mr Moussa Pouye</p>
                        <Link to="/inscription" className='btn btn-primary'>Créer un utilisateur</Link>
                        <Link to="/list" className='btn btn-primary'>Liste formateurs</Link>
                        <Link to="/listeFiche" className='btn btn-primary'>Gestion des fiches soumises</Link>
                        <Link to="/filiere" className='btn btn-primary'>Créer filière</Link>
                        <Link to="/matiere" className='btn btn-primary'>Créer matière</Link>
                        <Link to="/listrespons" className='btn btn-primary'>Assigner matières et filières</Link>
                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/CEO.svg" alt="CEO Illustration" />
                    </div>
                </div>

                <div className="data-section">
                    <h2>Fiches Soumises</h2>
                    {error && <p className="error-message">{error}</p>}
                    <ul>
                        {fiches.map((fiche) => (
                            <li key={fiche.id}>{fiche.titre} - {fiche.status}</li>
                        ))}
                    </ul>

                    <h2>Formateurs</h2>
                    <ul>
                        {formateurs.map((formateur) => (
                            <li key={formateur.id}>{formateur.nom} - {formateur.email}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Administrateur;
