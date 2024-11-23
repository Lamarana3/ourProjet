import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

const CreerFiliere = () => {
    const [competence, setCompetence] = useState('');
    const [name, setName] = useState('');
    const [formateurs, setFormateurs] = useState([]);  
    const [selectedFormateur, setSelectedFormateur] = useState('');  

    
    useEffect(() => {
        
        axios.get('http://localhost:8000/api/formateurs')
            .then(response => {
                
                setFormateurs(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des formateurs:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const data = {
            name,
            competence,
            formateur_id: selectedFormateur, 
        };

        
        axios.post('http://localhost:8000/api/filieres', data)
            .then(response => {
                alert('Filière créée avec succès!');
                
            })
            .catch(error => {
                console.error('Erreur lors de la création de la filière:', error);
            });
    };

    return (
        <div className='formulaire'>
            <Link to="#" className='btn btn-primary'>Retour</Link>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h1 style={styles.title}>Créer une filière</h1>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Nom de la filière</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Description :</label>
                    <textarea
                        placeholder="Description"
                        value={competence}
                        onChange={(e) => setCompetence(e.target.value)}
                        required
                        style={styles.textarea}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Responsable</label>
                    <select
                        value={selectedFormateur}
                        onChange={(e) => setSelectedFormateur(e.target.value)}  
                        required
                        style={styles.input}
                    >
                        <option value="">Sélectionner un formateur</option>
                        {formateurs.map(formateur => (
                            <option key={formateur.id} value={formateur.id}>
                                {formateur.name} 
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className='btn btn-primary'>Créer filière</button>
            </form>
        </div>
    );
};

const styles = {
    form: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    textarea: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        height: '100px',
    },
};

export default CreerFiliere;
