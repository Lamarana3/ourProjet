import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FicheForm = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/filieres')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
        setError('Une erreur est survenue lors de la récupération des données.');
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div>Chargement des données...</div>; 
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>; 
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Liens de navigation */}
      <a href="/message">
        <button style={{ marginLeft: '20px', marginBottom: '24px' }} className="btn btn-primary">Retour</button>
      </a>
      <a href="/boite">
        <button style={{ marginLeft: '20px', marginBottom: '24px' }} className="btn btn-primary">Vos messages</button>
      </a>
      <a href="/">
        <button style={{
          marginLeft: '20px',
          marginBottom: '24px',
          background: 'white',
          color: '#19153b',
        }} className="btn btn-primary">Déconnexion</button>
      </a>

      {/* Tableau des filières */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>FILIERE</th>
            <th>NOM</th>
            <th>DATE</th>
            <th>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.filiere}</td>
              <td>{item.nom}</td>
              <td>{item.date}</td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.detail}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FicheForm;
