import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FolderList from './FolderList';

const FileManager = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/folders') // Remplacer par l'URL de votre API
      .then(response => {
        setFolders(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des dossiers:', error);
      });
  }, []);

  const addFolder = (name) => {
    axios.post('http://localhost:8000/api/folders', { name }) 
      .then(response => {
        setFolders([...folders, response.data]);
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du dossier:', error);
      });
  };

  const addFileToFolder = (folderIndex, fileName) => {
    const folder = folders[folderIndex];
    axios.post(`http://localhost:8000/api/folders/${folder.id}/files`, { fileName })
      .then(response => {
        const updatedFolders = [...folders];
        updatedFolders[folderIndex].files.push(response.data);
        setFolders(updatedFolders);
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du fichier:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gestionnaire de Fiches</h1>
      <button 
        style={styles.button} 
        onClick={() => addFolder(prompt("Nom du dossier"))}>
        Ajouter un dossier
      </button>
      <FolderList folders={folders} addFileToFolder={addFileToFolder} />
    </div>
  );
};

// Styles en ligne
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f7fa',
    borderRadius: '8px',
    maxWidth: '900px',
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px 0',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  }
};

export default FileManager;
