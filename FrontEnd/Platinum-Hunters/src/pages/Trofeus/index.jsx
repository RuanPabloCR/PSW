import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Trophy, Star, Medal, Crown, Search } from 'lucide-react';
import { trophyData } from '../../sample';

const Trofeus = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('todos');

  const filteredTrophies = trophyData.filter(trophy => {
    const matchesSearch = trophy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trophy.game.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'todos' || trophy.type === filter;
    return matchesSearch && matchesFilter;
  });

  const getTrophyIcon = (type) => {
    switch (type) {
      case 'platinum': return <Crown className="text-info" size={24} />;
      case 'gold': return <Trophy className="text-warning" size={24} />;
      case 'silver': return <Medal className="text-light" size={24} />;
      case 'bronze': return <Star className="text-warning" size={24} />;
      default: return <Trophy className="text-muted" size={24} />;
    }
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Ultra Raro': return 'text-purple';
      case 'Raro': return 'text-info';
      case 'Comum': return 'text-success';
      default: return 'text-muted';
    }
  };

  const stats = {
    platinum: trophyData.filter(t => t.type === 'platinum').length,
    gold: trophyData.filter(t => t.type === 'gold').length,
    silver: trophyData.filter(t => t.type === 'silver').length,
    bronze: trophyData.filter(t => t.type === 'bronze').length,
    total: trophyData.length
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <Container className="py-4">
        {/* Header */}
        <div className="mb-4">
          <h1 className="display-5 fw-bold mb-2 text-purple">Meus Troféus</h1>
          <p className="text-muted">Suas conquistas e realizações nos jogos</p>
        </div>

        {/* Stats Cards */}
        <Row className="mb-4">
          <Col xs={6} md className="mb-3">
            <Card className="card-dark text-center">
              <Card.Body className="p-3">
                <Crown className="text-info mb-2" size={24} />
                <h4 className="text-info mb-1">{stats.platinum}</h4>
                <small className="text-muted">Platina</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md className="mb-3">
            <Card className="card-dark text-center">
              <Card.Body className="p-3">
                <Trophy className="text-warning mb-2" size={24} />
                <h4 className="text-warning mb-1">{stats.gold}</h4>
                <small className="text-muted">Ouro</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md className="mb-3">
            <Card className="card-dark text-center">
              <Card.Body className="p-3">
                <Medal className="text-light mb-2" size={24} />
                <h4 className="text-light mb-1">{stats.silver}</h4>
                <small className="text-muted">Prata</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md className="mb-3">
            <Card className="card-dark text-center">
              <Card.Body className="p-3">
                <Star className="text-warning mb-2" size={24} />
                <h4 className="text-warning mb-1">{stats.bronze}</h4>
                <small className="text-muted">Bronze</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md className="mb-3">
            <Card className="card-dark text-center border-purple">
              <Card.Body className="p-3">
                <Trophy className="text-purple mb-2" size={24} />
                <h4 className="text-purple mb-1">{stats.total}</h4>
                <small className="text-muted">Total</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Search and Filters */}
        <Row className="mb-4">
          <Col md={8} className="mb-3">
            <InputGroup>
              <InputGroup.Text className="bg-dark border-secondary">
                <Search size={16} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar troféus ou jogos..."
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
                { key: 'platinum', label: 'Platina' },
                { key: 'gold', label: 'Ouro' },
                { key: 'silver', label: 'Prata' },
                { key: 'bronze', label: 'Bronze' }
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

        {/* Trophies List */}
        <div className="mb-4">
          {filteredTrophies.map((trophy) => (
            <Card key={trophy.id} className="card-dark mb-3" style={{ cursor: 'pointer' }}>
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col xs={2} md={1}>
                    <div className="d-flex justify-content-center">
                      {getTrophyIcon(trophy.type)}
                    </div>
                  </Col>
                  <Col xs={8} md={9}>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <h5 className="mb-0">{trophy.name}</h5>
                      <span className={`small ${getRarityColor(trophy.rarity)}`}>
                        {trophy.rarity}
                      </span>
                    </div>
                    <p className="text-muted mb-2">{trophy.description}</p>
                    <div className="d-flex gap-3 small text-muted">
                      <span>🎮 {trophy.game}</span>
                      <span>📅 {new Date(trophy.dateEarned).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </Col>
                  <Col xs={2} md={2}>
                    <span className={`badge bg-${trophy.type === 'platinum' ? 'info' : trophy.type === 'gold' ? 'warning' : 'light'} text-capitalize`}>
                      {trophy.type}
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredTrophies.length === 0 && (
          <div className="text-center mt-5">
            <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
              <Trophy size={32} className="text-muted" />
            </div>
            <h4 className="text-white">Nenhum troféu encontrado</h4>
            <p className="text-muted">Tente buscar com outros termos ou ajustar os filtros</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Trofeus;