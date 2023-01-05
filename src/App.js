import React from 'react';
import './App.css';
import Register from './user/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './user/Login';
import ForgotPassword from './user/ForgotPassword';
import NewSubmit from './user/NewSubmit';
import Home from './user/Home';
//import NewSubmit from './user/NewSubmit';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/otp" element={<NewSubmit/>} />
        <Route path="/home" element={<Home/>} />



      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
