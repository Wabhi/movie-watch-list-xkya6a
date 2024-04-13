// SignUp.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/authService';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const history = '';

  const handleSignUp = async () => {
    const user = await AuthService.signUp(email);
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
