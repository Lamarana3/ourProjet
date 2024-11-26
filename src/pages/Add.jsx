import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; 

const Add = () => {
    const [inputData, setInputData] = useState({ name: '', email: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        
        api.post('/users', inputData)
            .then((response) => {
                alert(response.data.message); 
                navigate('/'); 
            })
            .catch((err) => {
                console.error("Erreur lors de l'ajout :", err);
                setError(err.response?.data?.message || "Une erreur est survenue.");
            });
    }

    return (
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nom:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={inputData.name}
                            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={inputData.email}
                            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                            required
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
