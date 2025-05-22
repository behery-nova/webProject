// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h2>Home - Go to /login</h2>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<h2>Dashboard placeholder</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
