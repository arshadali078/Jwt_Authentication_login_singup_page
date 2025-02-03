import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './/pages/auth/Login/Login'; // Import your Login component
import Dashbord from './pages/auth/dashbord/Dashbord';
import Header from './pages/auth/header/Header';
import Signup from './pages/auth/singup/Singup';
import Dashboard from './pages/auth/dashbord/Dashbord';


function App(){
const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

const handleLogin = (token) => {
  localStorage.setItem("token", token);
  setIsAuthenticated(true);
};

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  setIsAuthenticated(false);
};

return (
  <BrowserRouter>
    <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
    <Routes>
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login handleLogin={handleLogin} />} />
    </Routes>
  </BrowserRouter>
);
}


export default App;