import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Biblioteca from './pages/Biblioteca';
import Jogos from './pages/Jogos';
import Trofeus from './pages/Trofeus';
import Guias from './pages/Guias';
import Ranking from './pages/Ranking';
import Detalhes from './pages/Biblioteca/Detalhes';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="min-vh-100 bg-dark text-white">
        <NavBar />
        <main className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/biblioteca/detalhes/:id" element={<Detalhes />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/trofeus" element={<Trofeus />} />
            <Route path="/guias" element={<Guias />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
