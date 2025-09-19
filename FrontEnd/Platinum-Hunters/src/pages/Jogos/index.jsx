import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Search, Trophy, Clock, CheckCircle } from 'lucide-react';
import { sampleGames } from '../../sample';

const Jogos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('todos');

  const normalizedGames = sampleGames?.map(game => ({
    ...game,
    status: game.status || 'não iniciado',
    progresso: game.progresso || '0%'
  })) || [];

  const filteredGames = normalizedGames.filter(game => {
    const matchesSearch = game.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'todos' ||
      (filter === 'platinado' && game.status === 'platinado') ||
      (filter === 'em-progresso' && (game.status === 'jogando' || game.status === 'em progresso')) ||
      (filter === 'nao-iniciado' && game.status === 'não iniciado');
    return matchesSearch && matchesFilter;
  });

  const handleGameClick = (gameId) => {
    console.log(`Navegando para o jogo ${gameId}`);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'platinado': return <Trophy className="text-warning" size={16} />;
      case 'jogando':
      case 'em progresso': return <Clock className="text-purple" size={16} />;
      default: return <CheckCircle className="text-muted" size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'platinado': return 'text-warning';
      case 'jogando':
      case 'em progresso': return 'text-purple';
      default: return 'text-muted';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'jogando': return 'Em Progresso';
      case 'platinado': return 'Platinado';
      case 'não iniciado': return 'Não Iniciado';
      default: return status;
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <Container className="py-4">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="display-5 fw-bold mb-2 text-purple">Meus Jogos</h1>
          <p className="text-muted">Explore e gerencie sua coleção de jogos</p>
        </div>

        {/* Search and Filters */}
        <Row className="mb-4">
          <Col md={8} className="mb-3">
            <InputGroup>
              <InputGroup.Text className="bg-dark border-secondary">
                <Search size={16} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar jogos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-dark text-white border-secondary"
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <div className="d-flex gap-2 flex-wrap">
              {[
                { key: 'todos', label: 'Todos' },
                { key: 'platinado', label: 'Platinado' },
                { key: 'em-progresso', label: 'Em Progresso' },
                { key: 'nao-iniciado', label: 'Não Iniciado' }
              ].map((filterOption) => (
                <Button
                  key={filterOption.key}
                  variant={filter === filterOption.key ? "purple" : "outline-secondary"}
                  size="sm"
                  onClick={() => setFilter(filterOption.key)}
                  className="flex-shrink-0"
                >
                  {filterOption.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Games Grid */}
        <Row>
          {filteredGames.map((game) => (
            <Col xs={6} sm={4} md={3} lg={2} key={game.id} className="mb-4">
              <Card
                className="card-dark h-100 game-card"
                style={{ cursor: 'pointer', transition: 'transform 0.3s' }}
                onClick={() => handleGameClick(game.id)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="position-relative" style={{ aspectRatio: '3/4' }}>
                  <Card.Img
                    variant="top"
                    src={game.img || "https://via.placeholder.com/300x400"}
                    alt={game.name}
                    className="h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x400";
                    }}
                  />
                  <div className="position-absolute top-0 end-0 p-2">
                    <div className="bg-dark bg-opacity-75 rounded-circle p-1">
                      {getStatusIcon(game.status)}
                    </div>
                  </div>
                </div>
                <Card.Body className="p-2">
                  <Card.Title className="h6 mb-1 text-truncate">{game.name}</Card.Title>
                  <Card.Text className="small text-muted mb-1">{game.progresso}</Card.Text>
                  <div className={`small d-flex align-items-center gap-1 ${getStatusColor(game.status)}`}>
                    {getStatusIcon(game.status)}
                    <span>{getStatusLabel(game.status)}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Mobile List View */}
        <div className="d-md-none mt-4">
          <h5 className="text-purple mb-3">Vista em Lista</h5>
          {filteredGames.slice(0, 5).map((game) => (
            <Card
              key={`list-${game.id}`}
              className="card-dark mb-3"
              style={{ cursor: 'pointer' }}
              onClick={() => handleGameClick(game.id)}
            >
              <Card.Body className="p-3">
                <Row className="align-items-center">
                  <Col xs={3}>
                    <img
                      src={game.img || "https://via.placeholder.com/300x400"}
                      alt={game.name}
                      className="img-fluid rounded"
                      style={{ aspectRatio: '3/4', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x400";
                      }}
                    />
                  </Col>
                  <Col xs={7}>
                    <h6 className="mb-1">{game.name}</h6>
                    <p className="small text-muted mb-0">{game.progresso}</p>
                  </Col>
                  <Col xs={2} className="text-end">
                    <div className={getStatusColor(game.status)}>
                      {getStatusIcon(game.status)}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <div className="text-center mt-5">
            <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
              <Search size={32} className="text-muted" />
            </div>
            <h4 className="text-white">Nenhum jogo encontrado</h4>
            <p className="text-muted">Tente buscar com outros termos ou ajustar os filtros</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Jogos;
