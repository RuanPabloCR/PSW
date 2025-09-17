import './App.css';
import './shared/shared.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Biblioteca from './pages/Biblioteca';
import Jogos from './pages/Jogos';
import Trofeus from './pages/Trofeus';
import Guias from './pages/Guias';
import Ranking from './pages/Ranking';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => { setOpen(false); }, [location.pathname]);
  return (
    <nav className={`top-nav${open ? ' open' : ''}`}>
      <div className="nav-header">
        <span className="site-title">Platinum Hunters</span>
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setOpen(o => !o)}>☰</button>
      </div>
      <input id="search" type="search" placeholder="Buscar jogos, troféus, guias..." />
      <div className={`nav-links${open ? ' open' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}><span>Home</span></Link>
        <Link to="/biblioteca" className={location.pathname === '/biblioteca' ? 'active' : ''}><span>Biblioteca</span></Link>
        <Link to="/jogos" className={location.pathname === '/jogos' ? 'active' : ''}><span>Jogos</span></Link>
        <Link to="/trofeus" className={location.pathname === '/trofeus' ? 'active' : ''}><span>Troféus</span></Link>
        <Link to="/guias" className={location.pathname === '/guias' ? 'active' : ''}><span>Guias</span></Link>
        <Link to="/ranking" className={location.pathname === '/ranking' ? 'active' : ''}><span>Ranking</span></Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/trofeus" element={<Trofeus />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
