import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AssignerMaFi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    axios
      .get('http://localhost:8000/api/users')
      .then((response) => {
        setUsers(response.data); 
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }, []);

  
  const assignerMatiereFiliere = (userId) => {
    axios
      .post('http://localhost:8000/api/assigner', {
        user_id: userId,
        matiere: 'React', 
        filiere: 'DFE',   
      })
      .then((response) => {
        alert('Matière/Filière assignée avec succès !');
      })
      .catch((error) => {
        console.error('Erreur lors de l’assignation :', error);
        alert('Une erreur est survenue lors de l’assignation.');
      });
  };

  return (
    <div className="boite">
      <h1>Assigner matière/filière</h1>
      <a href="/message">
        <button
          style={{ marginLeft: '20px', marginBottom: '24px' }}
          className="btn btn-primary"
        >
          Retour
        </button>
      </a>
      <div className="liens">
        {users.map((user) => (
          <div key={user.id} className="lien-container">
            <Link to={`/fiche/${user.id}`} className="lien">
              {user.name} ({user.email})
            </Link>
            <button
              onClick={() => assignerMatiereFiliere(user.id)} 
              className="btn btn-secondary"
            >
              Assigner
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignerMaFi;
