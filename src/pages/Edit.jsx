import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        id: id,
        name: 'Nom par défaut', // Remplacez par des valeurs par défaut
        email: 'email@example.com'
    });
    const navigate = useNavigate();

    // Simulation d'un chargement de données sans backend
    useEffect(() => {
        const fetchedData = {
            id: id,
            name: 'Nom par défaut',
            email: 'email@example.com'
        };
        setData(fetchedData);
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        // Simuler une mise à jour réussie sans appel API
        alert('Données mises à jour avec succès !');
        navigate('/');
    }

    return (
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">ID:</label>
                        <input type="text" disabled name='id' value={data.id} className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="name">Nom:</label>
                        <input
                            type="text"
                            name='name'
                            value={data.name}
                            className='form-control'
                            onChange={e => setData({ ...data, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name='email'
                            value={data.email}
                            className='form-control'
                            onChange={e => setData({ ...data, email: e.target.value })}
                        />
                    </div>
                    <br />
                    <button className='btn btn-info'>Mettre à jour</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
