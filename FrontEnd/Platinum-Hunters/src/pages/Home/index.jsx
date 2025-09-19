import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { Trophy, TrendingUp, Calendar, BookOpen, Star, Users } from 'lucide-react';
import { sampleGames } from '../../sample';

const Home = () => (
  <div className="bg-dark text-white min-vh-100">
    {/* Hero Section */}
    <div className="bg-gradient" style={{ background: 'linear-gradient(135deg, #6f42c1 0%, #000000 100%)' }}>
      <Container className="py-5">
        <Row className="text-center">
          <Col>
            <h1 className="display-4 fw-bold mb-3">Platinum Hunters</h1>
            <p className="lead mb-4">Sua jornada rumo aos troféus platina começa aqui. Descubra, conquiste e compartilhe.</p>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="py-4">
      {/* Stats Section */}
      <Row className="mb-4">
        <Col xs={6} md={3} className="mb-3">
          <Card className="card-dark text-center h-100">
            <Card.Body>
              <Trophy className="text-purple mb-2" size={32} />
              <h4 className="fw-bold">47</h4>
              <small className="text-muted">Platinas</small>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="mb-3">
          <Card className="card-dark text-center h-100">
            <Card.Body>
              <Star className="text-purple mb-2" size={32} />
              <h4 className="fw-bold">1,247</h4>
              <small className="text-muted">Troféus</small>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="mb-3">
          <Card className="card-dark text-center h-100">
            <Card.Body>
              <TrendingUp className="text-purple mb-2" size={32} />
              <h4 className="fw-bold">85%</h4>
              <small className="text-muted">Progresso</small>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="mb-3">
          <Card className="card-dark text-center h-100">
            <Card.Body>
              <Users className="text-purple mb-2" size={32} />
              <h4 className="fw-bold">#127</h4>
              <small className="text-muted">Ranking</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Main Content */}
      <Row>
        {/* Popular Games */}
        <Col lg={8} className="mb-4">
          <Card className="card-dark">
            <Card.Header>
              <h5 className="mb-0 d-flex align-items-center text-purple">
                <TrendingUp className="me-2" size={20} />
                Populares Recentemente
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                {sampleGames?.slice(0, 6).map((game, index) => (
                  <Col xs={6} md={4} key={index} className="mb-3">
                    <div className="position-relative overflow-hidden rounded" style={{ aspectRatio: '3/4' }}>
                      <img
                        src={game.img || "https://via.placeholder.com/300x400"}
                        alt={game.name}
                        className="w-100 h-100 object-fit-cover"
                        style={{ transition: 'transform 0.3s' }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                      <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-dark bg-opacity-75">
                        <small className="text-white fw-semibold">{game.name}</small>
                      </div>
                    </div>
                  </Col>
                )) || (
                    <Col className="text-center py-4">
                      <p className="text-muted">Carregando jogos...</p>
                    </Col>
                  )}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Side Panel */}
        <Col lg={4}>
          <div className="d-flex flex-column gap-3">
            {/* Progress Card */}
            <Card className="card-dark">
              <Card.Header>
                <h6 className="mb-0 text-purple">Progresso Geral</h6>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <small>Troféus Ativos</small>
                    <small className="fw-semibold">62%</small>
                  </div>
                  <ProgressBar now={62} variant="info" />
                </div>
                <Button as={Link} to="/trofeus" className="btn-purple w-100">
                  Ver Todos os Troféus
                </Button>
              </Card.Body>
            </Card>

            {/* Challenge Card */}
            <Card className="card-dark">
              <Card.Header>
                <h6 className="mb-0 d-flex align-items-center text-warning">
                  <Calendar className="me-2" size={16} />
                  Desafio do Mês
                </h6>
              </Card.Header>
              <Card.Body>
                <h6 className="fw-semibold">Indie Master</h6>
                <p className="small text-muted mb-2">Platine 1 jogo indie em 30 dias</p>
                <small className="text-warning">15 dias restantes</small>
                <Button as={Link} to="/ranking" variant="outline-warning" className="w-100 mt-3">
                  Participar
                </Button>
              </Card.Body>
            </Card>

            {/* Featured Guide */}
            <Card className="card-dark">
              <Card.Header>
                <h6 className="mb-0 d-flex align-items-center text-info">
                  <BookOpen className="me-2" size={16} />
                  Guia em Destaque
                </h6>
              </Card.Header>
              <Card.Body>
                <h6 className="fw-semibold">Elden Ring</h6>
                <p className="small text-muted mb-2">Roadmap completo para platina em 60-80h</p>
                <small className="text-info">⭐ 4.8/5 • 234 avaliações</small>
                <Button as={Link} to="/guias" variant="outline-info" className="w-100 mt-3">
                  Ver Guia
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;