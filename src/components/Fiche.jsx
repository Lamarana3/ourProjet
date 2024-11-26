import React, { useState, useEffect } from 'react';
import { BiListMinus } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Fiche = () => {
  const { id } = useParams(); 
  const [fiche, setFiche] = useState(null); 
  const [message, setMessage] = useState(''); 
  const [showMessageForm, setShowMessageForm] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/fiche/${id}`)
      .then(response => {
        setFiche(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de la fiche:', error);
      });
  }, [id]);

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8000/api/fiche/${id}/message`, {
        message: message,
      });

      alert(response.data.success);
      setMessage(''); 
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      alert('Une erreur est survenue, veuillez réessayer.');
    }
  };

  const handleToggleMessageForm = () => {
    setShowMessageForm(!showMessageForm);
  };

  if (!fiche) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="fiche-container">
      <div className="fiche-header">
        <a href="/listeFiche">
          <button className="btn btn-primary fiche-btn">Retour</button>
        </a>
        <a href="/">
          <button className="btn btn-primary fiche-btn logout-btn">Déconnexion</button>
        </a>
        <h1 className="fiche-title">Détails de la fiche</h1>
      </div>

      <div className="fiche-details">
        <div className="fiche-info">
          <BiListMinus /> Enseignant: {fiche.enseignant}<br />
          <BiListMinus /> Téléphone: {fiche.telephone}<br />
          <BiListMinus /> Module: {fiche.module}<br />
          <BiListMinus /> Filière: {fiche.filiere}<br />
          <BiListMinus /> Volume horaire: {fiche.volume_horaire}h<br />
          <BiListMinus /> Élément de contenu: {fiche.element_contenu}<br />
          <BiListMinus /> Cours magistral: {fiche.cours_magistral}h<br />
          <BiListMinus /> Travaux dirigés: {fiche.travaux_diriges}h<br />
          <BiListMinus /> Travaux pratiques: {fiche.travaux_pratiques}h<br />
        </div>
      </div>

      <Link to="#" className="btn btn-primary" onClick={handleToggleMessageForm}>
        {showMessageForm ? "Masquer le formulaire" : "Rédiger un message"}
      </Link>

      {showMessageForm && (
        <div className="message-section">
          <h3 className="message-title">Rédiger un message</h3>
          <form onSubmit={handleSubmitMessage}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrivez votre message ici..."
              className="message-input"
            />
            <div className="message-submit">
              <button type="submit" className="btn btn-success">Envoyer le message</button>
            </div>
          </form>
        </div>
      )}

      <Link to="/send" className="btn btn-primary">Message</Link>
      <Link to="/form" className="btn btn-primary">Modifier</Link>
    </div>
  );
};

export default Fiche;
