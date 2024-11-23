import React, { useState } from 'react';
import '../pages/message.css';

const MessageInput = ({onSend}) => {

    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');
    const handleSend = () => {
        if (message.trim() && user.trim()) {
            onSend({ user, text:message });
            setMessage('');            
        }
    };
    return (
        <div className='message-input'>
            <input type="text" placeholder="nom d'utilisateur" value={user} onChange={(e) => setUser(e.target.value)} />
            <input type="text" placeholder="Tapez votre message..." value={message} onChange={(e) => setMessage(e.target.value)}  />
            <button className='btn' onClick={handleSend}>Envoyer</button>
            
        </div>
    );
};

export default MessageInput;