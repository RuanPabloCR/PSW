import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { Crown, Trophy, Medal, TrendingUp, Calendar, Users, Star } from 'lucide-react';
import { rankingData, challenges } from '../../sample';

const Ranking = () => {
  const [activeTab, setActiveTab] = useState('global');

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 'S+': return 'bg-purple text-white';
      case 'S': return 'bg-info text-white';
      case 'A+': return 'bg-success text-white';
      case 'B+': return 'bg-warning text-dark';
      case 'B': return 'bg-secondary text-white';
      default: return 'bg-dark text-white';
    }
  };

  const getPositionIcon = (position) => {
    switch (position) {
      case 1: return <Crown className="text-warning" size={24} />;
      case 2: return <Medal className="text-light" size={24} />;
      case 3: return <Medal className="text-warning" size={20} />;
      default: return <span className="text-purple fw-bold fs-5">#{position}</span>;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-success';
      case 'Médio': return 'bg-warning';
      case 'Difícil': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  const getRankCardBorder = (position) => {
    switch (position) {
      case 1: return 'border-warning';
      case 2: return 'border-light';
      case 3: return 'border-warning';
      default: return 'border-secondary';
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <Container className="py-4">
        {/* Header */}
        <div className="mb-4">
          <h1 className="display-5 fw-bold mb-2 text-purple">Rankings & Desafios</h1>
          <p className="text-muted">Competições e classificações da comunidade</p>
        </div>

        {/* Tabs */}
        <Nav variant="pills" className="mb-4 border-bottom border-secondary pb-3">
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'global'}
              onClick={() => setActiveTab('global')}
              className={activeTab === 'global' ? 'bg-purple text-white' : 'text-muted'}
            >
              <Crown size={16} className="me-2" />
              Ranking Global
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'challenges'}
              onClick={() => setActiveTab('challenges')}
              className={activeTab === 'challenges' ? 'bg-purple text-white' : 'text-muted'}
            >
              <Trophy size={16} className="me-2" />
              Desafios
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Global Ranking Tab */}
        {activeTab === 'global' && (
          <div>
            {/* Top 3 Podium */}
            <Row className="mb-5">
              {rankingData.slice(0, 3).map((player, index) => (
                <Col key={player.id} md={4} className={`mb-3 ${index === 0 ? 'order-md-2' : index === 1 ? 'order-md-1' : 'order-md-3'}`}>
                  <Card className={`card-dark text-center ${getRankCardBorder(player.position)} h-100`}>
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        {getPositionIcon(player.position)}
                      </div>
                      <img
                        src={player.avatar}
                        alt={player.username}
                        className="rounded-circle mb-3 border border-purple"
                        style={{ width: '64px', height: '64px' }}
                      />
                      <h5 className="fw-bold text-white mb-2">@{player.username}</h5>
                      <span className={`badge ${getRankBadgeColor(player.rank)} mb-3`}>
                        {player.rank}
                      </span>
                      <div className="text-muted small">
                        <div className="d-flex align-items-center justify-content-center gap-1 mb-1">
                          <Crown size={16} className="text-warning" />
                          <span>{player.platinums} platinas</span>
                        </div>
                        <div>{player.totalTrophies} troféus totais</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Full Ranking List */}
            <Card className="card-dark">
              <Card.Header>
                <Card.Title className="text-purple mb-0">Classificação Completa</Card.Title>
              </Card.Header>
              <Card.Body className="p-0">
                {rankingData.map((player) => (
                  <div
                    key={player.id}
                    className={`d-flex align-items-center p-3 border-bottom border-secondary ${player.isCurrentUser ? 'bg-purple bg-opacity-10 border-start border-purple border-4' : ''
                      }`}
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{ width: '48px' }} className="d-flex justify-content-center">
                      {getPositionIcon(player.position)}
                    </div>
                    <img
                      src={player.avatar}
                      alt={player.username}
                      className="rounded-circle mx-3"
                      style={{ width: '40px', height: '40px' }}
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-semibold text-white">@{player.username}</span>
                        {player.isCurrentUser && (
                          <span className="badge bg-purple bg-opacity-25 text-purple">
                            Você
                          </span>
                        )}
                      </div>
                      <div className="small text-muted">
                        {player.points.toLocaleString()} pontos
                      </div>
                    </div>
                    <div className="text-end">
                      <div className={`badge ${getRankBadgeColor(player.rank)} mb-1`}>
                        {player.rank}
                      </div>
                      <div className="small text-white d-block">{player.platinums} 🏆</div>
                      <div className="small text-success">{player.monthlyGain} este mês</div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <Row>
            {challenges.map((challenge) => (
              <Col key={challenge.id} md={6} lg={4} className="mb-4">
                <Card className="card-dark h-100 border-secondary">
                  <Card.Header className="border-bottom border-secondary">
                    <Card.Title className="text-purple d-flex align-items-center gap-2 mb-0">
                      {challenge.icon}
                      {challenge.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className="d-flex flex-column">
                    <p className="text-muted small mb-3">
                      {challenge.description}
                    </p>

                    <div className="mb-3 small">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Participantes:</span>
                        <span className="text-white d-flex align-items-center gap-1">
                          <Users size={12} />
                          {challenge.participants}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Tempo restante:</span>
                        <span className="text-white d-flex align-items-center gap-1">
                          <Calendar size={12} />
                          {challenge.timeLeft}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Dificuldade:</span>
                        <span className={`badge ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="bg-purple bg-opacity-10 border border-purple rounded p-3 mb-3">
                      <div className="small text-purple fw-semibold mb-1">Recompensa:</div>
                      <div className="small text-white">{challenge.reward}</div>
                    </div>

                    <Button variant="purple" className="mt-auto">
                      Participar do Desafio
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Ranking;
