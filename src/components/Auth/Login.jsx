// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const history = '';
  const handleLogin = async () => {
    const user = await AuthService.login(email);
    if (user) {
      history.push('/dashboard');
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
