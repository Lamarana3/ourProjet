import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreerMatiere = () => {
    const [competence, setCompetence] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            await axios.post('http://localhost:8000/api/matieres', {
                name: name,
                competence: competence,
            });

            alert('Matière créée avec succès !');
            
            
            navigate('/listeMatieres');
        } catch (error) {
            console.error('Erreur lors de la création de la matière :', error);
            alert('Une erreur est survenue, veuillez réessayer.');
        }
    };

    return (
        <div className="formulaire">
            <Link to="/listeMatieres" className="btn btn-primary">
                Retour
            </Link>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h1 style={styles.title}>Créer une matière</h1>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Nom</label>
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

                <button type="submit" className="btn btn-primary">
                    Créer matière
                </button>
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

export default CreerMatiere;
