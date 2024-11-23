import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

const BoiteRecept = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:8000/api/messages') 
            .then(response => {
                setMessages(response.data); 
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des messages:", error);
            });
    }, []);

    return (
        <div style={styles.page}>
            <Header />
            <h1 style={styles.title}>Boîte de Réception</h1>
            <div style={styles.buttonContainer}>
                <a href="/message">
                    <button style={styles.button}>Retour</button>
                </a>
            </div>

            <div style={styles.messagesContainer}>
            
                {messages.map((message) => (
                    <Link
                        to={`/fiche/${message.id}`} 
                        style={styles.messageLink}
                        key={message.id}
                    >
                        {`${message.nom} - ${message.date} ${message.heure}`}
                    </Link>
                ))}
            </div>
        </div>
    );
};

const styles = {
    page: {
        width: '100%',
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    title: {
        textAlign: 'center',
        color: '#333',
        fontSize: '36px',
        marginBottom: '20px',
    },
    buttonContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '12px 25px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
    },
    messagesContainer: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    messageLink: {
        display: 'block',
        backgroundColor: '#fff',
        padding: '10px 20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    messageLinkHover: {
        backgroundColor: '#007bff',
        color: '#fff',
    }
};

export default BoiteRecept;

