import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import api from '../api/axios'; 

const FicheFiliere = () => {
    const [columns] = useState([
        "Nom formateur",
        "Matière",
        "Volume horaire",
        "Élément de contenu",
        "Cours magistral",
        "Travaux Dirigés",
        "Travaux Pratiques"
    ]);

    const [records, setRecords] = useState([]);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        api.get('/fiches-filiere')
            .then((response) => {
                setRecords(response.data);
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des données :", err);
                setError("Impossible de charger les données. Veuillez réessayer.");
            });
    }, []);

    
    const handleDelete = (id) => {
        api.delete(`/fiches-filiere/${id}`)
            .then(() => {
                setRecords(records.filter(record => record.id !== id));
            })
            .catch((err) => {
                console.error("Erreur lors de la suppression :", err);
                setError("Impossible de supprimer cette fiche. Veuillez réessayer.");
            });
    };

    return (
        <div className='page' style={styles.page}>
            <Header />
            <Link
                to="/create"
                style={styles.backButton}
                className='btn btn-primary'
            >
                Retour
            </Link>

            {error ? (
                <p style={styles.errorText}>{error}</p>
            ) : (
                <table className='table' style={styles.table}>
                    <thead style={styles.tableHead}>
                        <tr>
                            {columns.map((c, i) => (
                                <th key={i} style={styles.tableHeaderCell}>{c}</th>
                            ))}
                            <th style={styles.tableHeaderCell}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((d, i) => (
                            <tr key={i} style={styles.tableRow}>
                                <td>{d.nomFormateur}</td>
                                <td>{d.matiere}</td>
                                <td>{d.volumeHoraire}</td>
                                <td>{d.elementContenu}</td>
                                <td>{d.coursM ? "Oui" : "Non"}</td>
                                <td>{d.travauxD ? "Oui" : "Non"}</td>
                                <td>{d.travauxP ? "Oui" : "Non"}</td>
                                <td>
                                    <button
                                        className='btn btn-sm btn-danger'
                                        style={styles.deleteButton}
                                        onClick={() => handleDelete(d.id)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const styles = {
    page: {
        width: '100%',
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    backButton: {
        marginTop: '3%',
        marginLeft: '25%',
        marginBottom: '0%',
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '16px',
    },
    errorText: {
        color: 'red',
        fontSize: '16px',
        marginTop: '20px',
        textAlign: 'center',
    },
    table: {
        width: '100%',
        marginTop: '30px',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    tableHead: {
        backgroundColor: '#f2f2f2',
    },
    tableHeaderCell: {
        padding: '12px 15px',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#333',
        borderBottom: '2px solid #ddd',
    },
    tableRow: {
        borderBottom: '1px solid #ddd',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default FicheFiliere;
