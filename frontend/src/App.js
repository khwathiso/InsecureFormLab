// src/App.js
import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import SensitiveForm from './components/SensitiveForm';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Restore login state on refresh
  useEffect(() => {
    const status = localStorage.getItem('loggedIn');
    setIsLoggedIn(status === 'true');
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
    setPage('form');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedIn');
    setPage('login');
  };

  return (
    <div className="App">
      <nav>
        {!isLoggedIn && <button onClick={() => setPage('register')}>Register</button>}
        {!isLoggedIn && <button onClick={() => setPage('login')}>Login</button>}
        {isLoggedIn && <button onClick={() => setPage('form')}>Sensitive Form</button>}
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>

      <div className="content">
        {page === 'register' && <Register />}
        {page === 'login' && <Login onLogin={handleLogin} />}
        {page === 'form' && (
          isLoggedIn ? <SensitiveForm /> : <p>Please log in to access this form.</p>
        )}
      </div>
    </div>
  );
}

export default App;
