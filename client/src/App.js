// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AuthorDashboard from './pages/AuthorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AuthorDashboard />} />
        <Route path="/" element={<h2>Home</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
