// src/main.jsx (Vite) ou src/index.js (CRA)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ou './App' para CRA
import './index.css'; // Importa os estilos globais

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);