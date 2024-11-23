import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FicheForm = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/filieres') // URL de  backend Laravel
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error("Il y a une erreur lors de la récupération des données :", error);
      });
  }, []); 

  return (
    <div style={{ padding: '20px' }}>

      <a href="/message"><button style={{ marginLeft: '20px', marginBottom: '24px', }} className="btn btn-primary">Retour</button></a>
      <a href="/boite"><button style={{ marginLeft: '20px', marginBottom: '24px', }} className="btn btn-primary">Vos message</button></a>
      <a href="/"><button style={{ marginLeft: '20px', marginBottom: '24px', background: 'white',  color: '#19153b', }} className="btn btn-primary">Déconnexion</button></a>

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

