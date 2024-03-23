import React from 'react';
import SignInComponent from './components/Login'; // Mudando o nome para diferenciar
import PageFooter from './components/Footer'; // Mudando o nome para mais especificidade

function MainApplication() { // Alterando o nome para evitar confusão e clareza
  return (
    <div className="main-application-container"> // Adicionando uma classe para estilização potencial
      <SignInComponent /> // Usando o nome alterado para o componente de login
      <PageFooter /> // Usando o nome alterado para o componente de rodapé
    </div>
  );
}

export default MainApplication; // Exportando com o novo nome
