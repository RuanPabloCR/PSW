import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Trophy, Gamepad2, BookOpen, Crown, Library, Map } from 'lucide-react';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/', icon: Crown },
    { name: 'Jogos', path: '/jogos', icon: Gamepad2 },
    { name: 'Troféus', path: '/trofeus', icon: Trophy },
    { name: 'Ranking', path: '/ranking', icon: Crown },
    { name: 'Biblioteca', path: '/biblioteca', icon: Library },
    { name: 'Guias', path: '/guias', icon: Map },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-dark" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Trophy className="me-2" size={24} style={{ color: '#6f42c1' }} />
          <span className="text-purple fw-bold">Platinum Hunters</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Nav.Link
                  key={item.name}
                  as={NavLink}
                  to={item.path}
                  className="d-flex align-items-center px-3 py-2 mx-1 rounded"
                  onClick={() => setExpanded(false)}
                >
                  <Icon size={18} className="me-2" />
                  {item.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;