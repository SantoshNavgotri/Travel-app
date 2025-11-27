import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import CardDetail from './Component/CardDetail';
import BookingForm from './Component/BookingForm';
import Dashboard from './Component/Admin/Dashboard';
import EditCard from './Component/Admin/EditCard';
import AdminAuth from './Component/Admin/AdminAuth';
import About from './Component/About';
import './App.css';
import AdminSignIn from './Component/Admin/AdminSignIn';
import AdminSignUp from './Component/Admin/AdminSignUp';
import Contact from './Component/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetail />} />
        <Route path="/booking/:id" element={<BookingForm />} />
        {/* <Route path="/admin/*" element={<AdminAuth />} /> */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/edit/:id" element={<EditCard />} />
        <Route path="/about" element={<About />} />
        <Route path="admin/auth/signin" element={<AdminSignIn />} />
                {/* /admin/auth/signin */}
                <Route path="/admin/auth/signup" element={<AdminSignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;