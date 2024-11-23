import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // URL de base de votre API Laravel
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;