import React, { useEffect, useState } from 'react';
import MessageInput from '../components/MessageInput';
import MessageList from '../components/MessageList';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Message = () => {
    const [message, setMessage] = useState([]);

    const handleSendMessage = (newMessage) => {
        setMessage([...message, newMessage]);
    };

    

    return (
        <div className='chat'>
            <Header />
            

            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 >Liste DE FICHES </h1>
                        <p>Bonjour! Aissatou Diallo
                        
                        </p>
                        <Link to="/listeFiche" className='btn btn-primary'>Voir fiche</Link>

                        

                    </div>
                    <div className="jumbo-image">
                        <img src="public/images/responsable.svg" alt="" />
                    </div>
                    
                </div>
            </div>

            

            
        </div>
    );
};

export default Message;