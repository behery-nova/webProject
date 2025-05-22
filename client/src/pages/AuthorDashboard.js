// client/src/pages/AuthorDashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      return navigate('/login');
    }

    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.role !== 'author') {
      return navigate('/login');
    }

    setUser(parsedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome, {user.name}</h2>
      <p>Role: {user.role}</p>

      <button onClick={handleLogout} style={{ marginTop: '1rem' }}>
        Logout
      </button>

      {/* Placeholder for future features */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Your Submissions</h3>
        <p>(Submission list will appear here)</p>
      </div>
    </div>
  );
};

export default AuthorDashboard;
