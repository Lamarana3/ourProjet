import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

const ListFormateur = () => {
    const [formateurs, setFormateurs] = useState([]);
    const [columns] = useState(["id", "name", "email", "tel", "module"]);
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/formateurs')
            .then(response => {
                setFormateurs(response.data);
            })
            .catch(error => {
                console.error("Il y a une erreur lors de la récupération des formateurs: ", error);
            });
    }, []);

    
    const handleDelete = (id) => {
        const conf = window.confirm("Etes-vous sûr de vouloir supprimer ?");
        if (conf) {
            axios.delete(`http://localhost:8000/api/formateurs/${id}`)
                .then(response => {
                    
                    setFormateurs(formateurs.filter(formateur => formateur.id !== id));
                    alert('Formateur supprimé avec succès');
                })
                .catch(error => {
                    console.error('Erreur lors de la suppression: ', error);
                    alert('Une erreur est survenue lors de la suppression.');
                });
        }
    };

    return (
        <div className='page' style={{ width: '100%' }}>
            <Header />
            <Link to="/create" style={{ marginTop: '3%', marginLeft: '25%', marginBottom: '0%' }} className='btn btn-primary'>
                Ajouter
            </Link>

            <table className='table' style={{ marginTop: '30px' }}>
                <thead>
                    <tr>
                        {columns.map((c, i) => (
                            <th key={i}>{c}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {formateurs.map((formateur) => (
                        <tr key={formateur.id}>
                            <td>{formateur.id}</td>
                            <td>{formateur.name}</td>
                            <td>{formateur.email}</td>
                            <td>{formateur.tel}</td>
                            <td>{formateur.module}</td>
                            <td>
                                <Link to={`/update/${formateur.id}`} className='btn btn-sm btn-success'>
                                    Modifier
                                </Link>
                                <button onClick={() => handleDelete(formateur.id)} className='btn btn-sm btn-danger'>
                                    Supprimer
                                </button>
                                <Link to="/assigner" className='btn btn-sm btn-info'>
                                    Assigner M/F
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListFormateur;
