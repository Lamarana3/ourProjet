
import React, { useState } from 'react';
import axios from 'axios';
import '../loginregister/register.css'; 

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            setError('Les mots de passe ne correspondent pas.');
            setSuccess('');
            return;
        }

        axios.post('', { name, email, tel, password, password_confirmation: passwordConfirm })
            .then(() => {
                setSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter.');
                setError('');
            })
            .catch(() => {
                setError('Échec de l\'inscription. Veuillez vérifier vos informations.');
                setSuccess('');
            });
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Ajouter un utilisateur</h2>
            <form onSubmit={handleRegister} className="register-form">
                <div className="form-group">
                    <label>Nom:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Entrez votre nom"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Entrez votre email"
                    />
                </div>
                <div className="form-group">
                    <label>Téléphone:</label>
                    <input
                        type="text"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Entrez votre téléphone"
                    />
                </div>
                <div className="form-group">
                    <label>Mot de passe:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Entrez votre mot de passe"
                    />
                </div>
                <div className="form-group">
                    <label>Confirmez le mot de passe:</label>
                    <input
                        type="password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Confirmez votre mot de passe"
                    />
                </div>
                <div className="form-group">
                    <label>Fonction:</label>
                    <select className="form-input">
                        <option value="">Sélectionnez une option</option>
                        <option value="matiere">Matière</option>
                        <option value="filiere">Filière</option>
                    </select>
                </div>
                <button type="submit" className="register-button">Inscrire</button>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </form>
        </div>
    );
};

export default Register;
