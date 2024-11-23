import React from 'react';
import axios from 'axios';

const API_URL ='';

export const getMessages = () => {
    return axios.get(`${API_URL}/messages`);
  };
  
  export const sendMessage = (message) => {
    return axios.post(`${API_URL}/messages`, message);
  }

const MessageService = () => {
    return (
        <div>
            
        </div>
    );
};

export default MessageService;