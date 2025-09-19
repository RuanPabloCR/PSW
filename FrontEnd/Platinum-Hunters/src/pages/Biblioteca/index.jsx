import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'lucide-react';
import { sampleGames } from '../../sample';

const Biblioteca = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = sampleGames.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-dark text-white min-vh-100">
      <Container className="py-4">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="display-5 fw-bold mb-2 text-purple">Minha Biblioteca</h1>
          <p className="text-muted">Gerencie seus jogos e acompanhe seu progresso</p>
        </div>

        {/* Search */}
        <Row className="mb-4">
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text className="bg-dark border-secondary">
                <Search size={16} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar na biblioteca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-dark text-white border-secondary"
              />
            </InputGroup>
          </Col>
        </Row>

        <Card className="card-dark">
          <Card.Body>
            {/* Games List */}
            <div className="mb-4">
              {filteredGames.slice(0, 2).map((game) => (
                <Card key={game.id} className="card-dark mb-3">
                  {/* Mobile Version - Card clicável sem botão */}
                  <div className="d-md-none">
                    <Link to={`/biblioteca/detalhes/${game.id}`} className="text-decoration-none">
                      <Card.Body style={{ cursor: 'pointer' }}>
                        <Row className="align-items-center">
                          <Col xs={5}>
                            <img
                              src={game.img}
                              alt={game.name}
                              className="img-fluid rounded"
                              style={{ aspectRatio: '3/4', objectFit: 'cover', width: '100%' }}
                            />
                          </Col>
                          <Col xs={7}>
                            <h5 className="fw-semibold mb-1 text-white">{game.name}</h5>
                            <p className="text-muted mb-1">
                              Status: <strong className="text-white">{game.status}</strong>
                            </p>
                            <p className="text-muted mb-0">
                              Progresso: <strong className="text-white">{game.progresso}</strong>
                            </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Link>
                  </div>

                  {/* Desktop Version - Com botão */}
                  <div className="d-none d-md-block">
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col xs={3} md={2}>
                          <img
                            src={game.img}
                            alt={game.name}
                            className="img-fluid rounded"
                            style={{ aspectRatio: '3/4', objectFit: 'cover' }}
                          />
                        </Col>
                        <Col xs={6} md={8}>
                          <h5 className="fw-semibold mb-1">{game.name}</h5>
                          <p className="text-muted mb-1">
                            Status: <strong className="text-white">{game.status}</strong>
                          </p>
                          <p className="text-muted mb-0">
                            Progresso: <strong className="text-white">{game.progresso}</strong>
                          </p>
                        </Col>
                        <Col xs={3} md={2}>
                          <Button
                            as={Link}
                            to={`/biblioteca/detalhes/${game.id}`}
                            variant="outline-light"
                            size="sm"
                            className="w-100"
                          >
                            Detalhes
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </div>
                </Card>
              ))}
            </div>

            {/* Filters */}
            <div className="border-top pt-4">
              <h5 className="mb-3">Filtros</h5>
              <div className="d-flex flex-wrap gap-2">
                <Button variant="outline-secondary" size="sm">Jogando</Button>
                <Button variant="outline-secondary" size="sm">Platinado</Button>
                <Button variant="outline-secondary" size="sm">Abandonado</Button>
                <Button variant="outline-secondary" size="sm">PSN</Button>
                <Button variant="outline-secondary" size="sm">Steam</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Biblioteca;
