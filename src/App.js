import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Layout from './pages/Layout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' index element={<Layout />} />
          <Route path='about' index element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
