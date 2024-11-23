import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [inputData, setInputData] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        // Récupérer les données existantes dans le localStorage
        const existingData = JSON.parse(localStorage.getItem('users')) || [];

        // Ajouter les nouvelles données à la liste
        const newData = [...existingData, { ...inputData, id: existingData.length + 1 }];

        // Enregistrer la liste mise à jour dans le localStorage
        localStorage.setItem('users', JSON.stringify(newData));

        alert("Data Added Successfully!");

        // Rediriger vers la liste (ou une autre page)
        navigate('/');
    }

    return (
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <div className='retour'>
                
                </div>
            
                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <label htmlFor="name">Nom:</label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            value={inputData.name}
                            onChange={e => setInputData({ ...inputData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            value={inputData.email}
                            onChange={e => setInputData({ ...inputData, email: e.target.value })}
                        />
                    </div>
                    <br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
