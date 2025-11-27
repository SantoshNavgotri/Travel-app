import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to register a new admin
    console.log('Admin Sign Up:', { username, email, password });
    // On successful registration, navigate to the sign-in page or dashboard
    // For now, we'll just navigate to a placeholder
    navigate('/admin/signin'); 
  };

  return (
    <div className="admin-auth-container">
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleSubmit} className="admin-auth-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/admin/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default AdminSignUp;
