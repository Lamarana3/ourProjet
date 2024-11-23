import React from 'react';
import Folder from './Folder';

const FolderList = ({ folders, addFileToFolder }) => {
  return (
    <div>
      {folders.map((folder, index) => (
        <Folder
          key={index}
          index={index}
          name={folder.name}
          files={folder.files}
          addFileToFolder={addFileToFolder}
        />
      ))}
    </div>
  );
};

export default FolderList;
