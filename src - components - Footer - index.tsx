// Importa o CSS para estilização
import "./style.css";

// Define o componente Footer como uma função
const Footer = () => {
  // Retorna o JSX para o rodapé
  return (
    <div className="footer-container">
      <footer className="custom-footer">
        <p>Isabelle Cristina Santos Queiroz</p>
        <p>RM554073</p>
      </footer>
    </div>
  );
};

// Exporta o componente Footer para ser usado em outros arquivos
export default Footer;
