import React, { useState } from 'react';
import { useFormateur } from '../components/FormateurContext';

const AddFormateur = () => {
    const { addFormateur } = useFormateur();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormateur = { id: Date.now(), name, email, password, tel  };
        addFormateur(newFormateur);
        setName('');
        setEmail('');
        setPassword('');
        setTel('');
        alert('Formateur ajouté avec succès');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
            <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="Telephone" required />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddFormateur;
