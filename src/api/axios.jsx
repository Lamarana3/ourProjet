import axios from 'axios';


const apiClient = axios.create({
  baseURL: '/api', // Remplacez par l'URL de base réelle si nécessaire
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => Promise.reject(error) 
);

export default apiClient;
