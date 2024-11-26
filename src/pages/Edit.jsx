import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios'; 

const Edit = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        id: id,
        name: '',
        email: ''
    });
    const navigate = useNavigate();

    
    useEffect(() => {
        api.get(`/users/${id}`)
            .then((response) => {
                setData(response.data.user); 
            })
            .catch((error) => {
                console.error("Erreur lors du chargement de l'utilisateur:", error);
            });
    }, [id]);

    
    function handleSubmit(event) {
        event.preventDefault();

    
        api.put(`/users/${id}`, data)
            .then((response) => {
                alert('Données mises à jour avec succès!');
                navigate('/'); 
            })
            .catch((error) => {
                console.error("Erreur lors de la mise à jour :", error);
                alert('Une erreur est survenue lors de la mise à jour.');
            });
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
                    <button type="submit" className='btn btn-info'>Mettre à jour</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;

