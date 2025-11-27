import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminLoginSuccess } from '../../Redux/AdminAuthAction';
import './AdminAuth.css';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Admin Sign In:', { email, password });

    const isLoginSuccessful = email === 'admin@example.com' && password === 'password'; 

    if (isLoginSuccessful) {
      const adminData = { email: email, role: 'admin' }; 
      dispatch(adminLoginSuccess(adminData));
      navigate('/admin'); // Navigate to the admin dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-auth-container">
      <h2>Admin Sign In</h2>
      <form onSubmit={handleSubmit} className="admin-auth-form">
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
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/admin/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default AdminSignIn;
