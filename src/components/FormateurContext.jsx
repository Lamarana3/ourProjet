import React, { createContext, useState, useContext } from 'react';

const FormateurContext = createContext();

export const useFormateur = () => useContext(FormateurContext);

export const FormateurProvider = ({ children }) => {
    const [formateurs, setFormateurs] = useState([
        { id: 1, name: 'Mouhamad Dia', email: 'mouhamed@gmail.com' },
        { id: 2, name: 'Maryam Diallo', email: 'maryam@gmail.com' },
        { id: 3, name: 'Marie Louise Diaw', email: 'marie@gmail.com' }
    ]);

    const addFormateur = (formateur) => {
        setFormateurs([...formateurs, formateur]);
    };

    return (
        <FormateurContext.Provider value={{ formateurs, addFormateur }}>
            {children}
        </FormateurContext.Provider>
    );
};
