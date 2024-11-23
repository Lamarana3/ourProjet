
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api'; 
import Header from '../components/Header';

const BoardFiliere = () => {
    const [columns, setColumns] = useState(["id", "Nom de filière", "Responsable"]);
    const [records, setRecords] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    
    useEffect(() => {
        api.get('/filieres')
            .then((response) => {
                setRecords(response.data); 
            })
            .catch((error) => {
                setError('Erreur lors du chargement des filières');
                console.error(error);
            });
    }, []);

    // Supprimer une filière
    const handleSubmit = (id) => {
        const conf = window.confirm("Etes-vous sûr de vouloir supprimer ?");
        if (conf) {
            api.delete(`/filieres/${id}`)
                .then(() => {
                    setRecords(records.filter((record) => record.id !== id));
                    alert('Filière supprimée');
                })
                .catch((error) => {
                    setError('Erreur lors de la suppression');
                    console.error(error);
                });
        }
    };

    return (
        <div className="page" style={styles.page}>
            <Header />
            <div style={styles.buttonContainer}>
                <Link to="/create" style={styles.button}>Retour</Link>
                <Link to="/create" style={styles.button}>Messages</Link>
            </div>
            
            {error && <p style={styles.errorText}>{error}</p>}
            
            <table className="table" style={styles.table}>
                <thead>
                    <tr>
                        {columns.map((c, i) => (
                            <th key={i} style={styles.tableHeaderCell}>{c}</th>
                        ))}
                        <th style={styles.tableHeaderCell}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((d) => (
                            <tr key={d.id} style={styles.tableRow}>
                                <td>{d.id}</td>
                                <td>{d.nomFiliere}</td>
                                <td>{d.responsable}</td>
                                <td>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-success' style={styles.actionButton}>Modifier</Link>
                                    <button onClick={() => handleSubmit(d.id)} className='btn btn-sm btn-danger' style={styles.deleteButton}>Supprimer</button>
                                    <Link to="/detail" className='btn btn-sm btn-info' style={styles.actionButton}>Détails</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    page: {
        width: '100%',
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        textAlign: 'center',
        display: 'inline-block',
    },
    errorText: {
        color: 'red',
        fontSize: '16px',
        textAlign: 'center',
    },
    table: {
        width: '100%',
        marginTop: '30px',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
    actionButton: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '5px',
        marginRight: '5px',
        textDecoration: 'none',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
};

export default BoardFiliere;
