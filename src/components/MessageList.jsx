import React from 'react';
import '../pages/message.css';

const MessageList = ({messages}) => {
    return (
        <div className='message-list'>
            {messages.map((message, index) => (
                <div key={index} className='message-item'>
                    <strong>{message.user}:</strong> {message.text}
                </div>
            ))}
        </div>
    );
};

export default MessageList;
