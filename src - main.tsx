// Importando os pacotes necessários e o arquivo de estilo
import React from 'react';
import { createRoot } from 'react-dom/client';
import MainComponent from './App.tsx'; // Renomeado para evitar confusão
import './main-style.css'; // Nome alterado para refletir o conteúdo

// Busca o elemento raiz e cria a raiz do React
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  // Renderiza o componente principal dentro do StrictMode
  root.render(
    <React.StrictMode>
      <MainComponent />
    </React.StrictMode>,
  );
}
