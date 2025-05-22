// client/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // Save token & user
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      setMessage('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
