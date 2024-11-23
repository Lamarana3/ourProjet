import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const TriFiches = () => {
    const [archives, setArchives] = useState([]);
    const [triDatas, setTriDatas] = useSearchParams('upload_at');
    const [order, setOrder] = useState('decroissant');
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await axios.get('/api/archives', {
                    params: { sort_by: triDatas, order: order}
                });
                setArchives(response.data);
            }catch (error) {
                console.error("Erreur lors du chargement des archives :", error);
            }
        };
        fetchData();
    }, [triDatas, order]);

    const handleTriDatasChange = (e) => {
        setTriDatas(e.target.value);
    };

    const handleOrderChange = () => {
        setOrder(order === 'asc' ? 'decroissant' : 'asc');
    };
    return (
        <div className='trillage'>
            <h2>Liste des fiches archivées</h2>
            <div className="choixTri">
                <label htmlFor="Tri">Trier par: </label>
                <select value={triDatas} onChange={handleTriDatasChange}>
                    <option value="upload_at">Date</option>
                    <option value="folder_name">Nom du dossier</option>

                </select>
                <button onClick={handleOrderChange}>{order === 'asc' ? 'ordre ascendant' : 'ordre descendant'}</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nom du fichier</th>
                        <th>Nom du dossier</th>
                        <th>Date d'upload</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(archives) && archives.map((archive) => (
                        <div key={archive.id}>{archive.name}</div>
                ))}

                    {archives.map((archives) => (
                        <tr key={archives.id}>
                            <td>{archives.file_name}</td>
                            <td>{archives.folder_name}</td>
                            <td>{new Date(archives.uploaded_at).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
};

export default TriFiches;