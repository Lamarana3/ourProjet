import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';


const ListeResponsable = () => {
    const [columns, setColumns] = useState(["id", "name", "email"]); 
    const [records, setRecords] = useState([
        { id: 1, name: 'Mouhamad Diallo', email: 'mouhamed@gmail.com', tel: '772352638', metier: 'DFE' },
        { id: 2, name: 'Ndeye Codou Faye', email: 'maryam@gmail.com', tel: '772352638', metier: 'DBE' },
        { id: 3, name: 'Marie Louise Sané', email: 'marie@gmail.com', tel: '772352638', metier: 'ABD' },
        { id: 3, name: 'Sokhna Sene', email: 'marie@gmail.com', tel: '772352638',  metier: 'APD'}
    ]); 
    const navigate = useNavigate();

    
    const handleSubmit = (id) => {
        const conf = window.confirm("Etes-vous sûr de vouloir supprimer ?");
        if (conf) {
            setRecords(records.filter((record) => record.id !== id));
            alert('Contenu supprimé');
            navigate('/');
        }
    };

    

    return (
        <div className='page' style={{ width: '100%' }} >
            <Header />
            <Link to="/create" style={{ marginTop: '3%', marginLeft: '25%', marginBottom: '0%' }} className='btn btn-primary'>Ajouter</Link>
            
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
                    {
                        records.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.tel}</td>
                                <td>{d.metier}</td>
                                <td>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-success'>Modifier</Link>
                                    <button onClick={() => handleSubmit(d.id)} className='btn btn-sm btn-danger'>Supprimer</button>
                                
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            
        </div>
    );
};

export default ListeResponsable;