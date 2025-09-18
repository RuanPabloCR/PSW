import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Biblioteca from './pages/Biblioteca';
import Jogos from './pages/Jogos';
import Trofeus from './pages/Trofeus';
import Guias from './pages/Guias';
import Ranking from './pages/Ranking';
import Detalhes from './pages/Biblioteca/Detalhes';
import Navbar from './components/NavBar';
import { Box } from '@mui/material';
function App() {
  return (
    <Router>
      <Navbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Platinum-Hunters</Link>
        <Link to="/biblioteca" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '1rem' }}>Biblioteca</Link>
        <Link to="/jogos" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '1rem' }}>Jogos</Link>
        <Link to="/trofeus" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '1rem' }}>Trofeus</Link>
        <Link to="/guias" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '1rem' }}>Guias</Link>
        <Link to="/ranking" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '1rem' }}>Ranking</Link>
      </Navbar>
      <Box sx={{ maxWidth: '1280px', margin: '0 auto', background: '#16181C', minHeight: '100vh' }}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/biblioteca/detalhes" element={<Detalhes />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/trofeus" element={<Trofeus />} />
            <Route path="/guias" element={<Guias />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </main>
      </Box>
    </Router>
  );
}

export default App;
