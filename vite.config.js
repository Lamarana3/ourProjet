import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', 
        //ChangeOrigin  Permet de changer l'origine de la requête
        changeOrigin: true, 
        secure: false,  // Désactive la vérification SSL (utile en local si nécessaire)
      },
    },
  },
});





