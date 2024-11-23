import React from 'react';
import File from './File';

const Folder = ({ index, name, files, addFileToFolder }) => {
  const addFile = () => {
    const fileName = prompt("Nom de la fiche");
    if (fileName) addFileToFolder(index, fileName);
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={addFile}>Ajouter une fiche</button>
      <div>
        {files.map((file, fileIndex) => (
          <File key={fileIndex} name={file} />
        ))}
      </div>
    </div>
  );
};

export default Folder;
