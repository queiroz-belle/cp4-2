// Importa useState do React e o arquivo de estilo
import React, { useState } from 'react';
import "./style.css";

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    if (username === 'user' && password === 'password') {
      setErrorMessage('');
      alert('Login bem sucedido');
    } else {
      setErrorMessage('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container"> 
        <div className='form-header'>
            <div className='title'>
                <h2>Login</h2>
            </div>
        </div>
        <form className='login-form' onSubmit={handleLogin}>
            <div>
                <label>
                    Username:
                    <br />
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange} 
                        placeholder="Digite seu username" 
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <br />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange}  
                        placeholder="Digite sua senha"
                        required 
                    />
                </label>
                <br />
            
                <button type="submit">Login</button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
        </form>
    </div>
  );
};

export default LoginComponent;
