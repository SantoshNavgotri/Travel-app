import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSignIn from './AdminSignIn';
import AdminSignUp from './AdminSignUp';

const AdminAuth = () => {
  return (
    <div className="admin-auth-page">
      <Routes>
        <Route path="/signin" element={<AdminSignIn />} />
        {/* /admin/auth/signin */}
        <Route path="signup" element={<AdminSignUp />} />
        {/* <Route path="/" element={<AdminSignUp />} /> Default to sign-up */}
      </Routes>
    </div>
  );
};

export default AdminAuth;
