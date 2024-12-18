import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'user' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/todos');
    } else {
      setError('Invalid credentials');
    }
  };
  return (
    <>
    <h2>Login</h2>
    <div className='LoginDiv'>
      
      <form onSubmit={handleSubmit}>
        <label >Username:</label>
        <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label >Password:</label>
        <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <div>{error}</div>}
      </form>
    </div>
    </>
  );
};

export default Login;
