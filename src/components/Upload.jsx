import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] =useState(null);
    const [folderName, setFolderName] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new formData();
        formData.append('file', file);
        formData.append('folder_name', folderName);
        try{
            await axios.post('/api/archives', formData);
            alert('Fichier telechargé avec succés');
        }catch (error) {
            console.error(error);
            alert('Erreue lors du téléchargement du fichier');
        }
    };
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
                <input type="text" value={folderName} onChange={(e) => setFolderName(e.target.value)} placeholder='Nom du dossier' required />
                <button type='submit'>Upload</button>
            </form>
        </div>
    );
};

export default Upload;