import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import { BookOpen, Star, Clock, User, Search, Filter, TrendingUp, Play, FileText } from 'lucide-react';
import { guidesData } from '../../sample';

const Guias = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('todos');
  const [difficultyFilter, setDifficultyFilter] = useState('todos');

  const filteredGuides = guidesData.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'todos' || guide.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === 'todos' || guide.difficulty === difficultyFilter;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return 'success';
      case 'Médio': return 'warning';
      case 'Difícil': return 'danger';
      case 'Muito Difícil': return 'dark';
      default: return 'secondary';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <Play size={16} className="text-danger" />;
      case 'guide': return <FileText size={16} className="text-info" />;
      default: return <BookOpen size={16} className="text-purple" />;
    }
  };

  const categories = ['todos', 'Platina', 'Coletáveis', 'Speedrun', 'Builds', 'Troféus'];
  const difficulties = ['todos', 'Fácil', 'Médio', 'Difícil', 'Muito Difícil'];

  return (
    <div className="bg-dark text-white min-vh-100">
      <Container className="py-4">
        {/* Header */}
        <div className="mb-4">
          <h1 className="display-5 fw-bold mb-2 text-purple">Guias & Tutoriais</h1>
          <p className="text-muted">Recursos criados pela comunidade para te ajudar</p>
        </div>

        {/* Stats */}
        <Row className="mb-4">
          <Col xs={6} md={3} className="mb-3">
            <Card className="card-dark text-center">
              <Card.Body className="p-3">
                <BookOpen className="text-purple mb-2" size={24} />
                <h4 className="text-purple mb-1">{guidesData.length}</h4>
                <small className="text-muted">Guias</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <Card className="card-dark text-center">
              <Card.Body className="p-3">
                <User className="text-info mb-2" size={24} />
                <h4 className="text-info mb-1">15</h4>
                <small className="text-muted">Autores</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <Card className="card-dark text-center">
              <Card.Body className="p-3">
                <TrendingUp className="text-success mb-2" size={24} />
                <h4 className="text-success mb-1">10K+</h4>
                <small className="text-muted">Visualizações</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <Card className="card-dark text-center">
              <Card.Body className="p-3">
                <Star className="text-warning mb-2" size={24} />
                <h4 className="text-warning mb-1">4.8</h4>
                <small className="text-muted">Avaliação Média</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Search and Filters */}
        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <InputGroup>
              <InputGroup.Text className="bg-dark border-secondary">
                <Search size={16} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar guias, jogos ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-dark text-white border-secondary"
              />
            </InputGroup>
          </Col>
          <Col md={3} className="mb-3">
            <Form.Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-dark text-white border-secondary"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'todos' ? 'Todas as Categorias' : category}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3} className="mb-3">
            <Form.Select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="bg-dark text-white border-secondary"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'todos' ? 'Todas as Dificuldades' : difficulty}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* Guides Grid */}
        <Row>
          {filteredGuides.map((guide) => (
            <Col key={guide.id} md={6} lg={4} className="mb-4">
              <Card className="card-dark h-100" style={{ cursor: 'pointer' }}>
                <div className="position-relative">
                  <div
                    className="bg-secondary d-flex align-items-center justify-content-center"
                    style={{ height: '200px' }}
                  >
                    <BookOpen size={48} className="text-muted" />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2">
                    {getTypeIcon(guide.type)}
                  </div>
                  <Badge
                    bg={getDifficultyColor(guide.difficulty)}
                    className="position-absolute bottom-0 start-0 m-2"
                  >
                    {guide.difficulty}
                  </Badge>
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge bg="outline-purple" className="text-purple border border-purple me-2">
                      {guide.category}
                    </Badge>
                  </div>

                  <h5 className="fw-bold mb-2">{guide.title}</h5>
                  <p className="text-muted small mb-3 flex-grow-1">
                    {guide.description}
                  </p>

                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-1">
                      {guide.tags.map(tag => (
                        <Badge key={tag} bg="secondary" className="small">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-top border-secondary pt-3 mt-auto">
                    <Row className="small text-muted">
                      <Col xs={6}>
                        <div className="d-flex align-items-center gap-1 mb-1">
                          <User size={12} />
                          <span>{guide.author}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <Clock size={12} />
                          <span>{guide.estimatedTime}</span>
                        </div>
                      </Col>
                      <Col xs={6} className="text-end">
                        <div className="d-flex align-items-center justify-content-end gap-1 mb-1">
                          <Star size={12} className="text-warning" />
                          <span>{guide.rating}</span>
                        </div>
                        <div>{guide.views} visualizações</div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {filteredGuides.length === 0 && (
          <div className="text-center mt-5">
            <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
              <BookOpen size={32} className="text-muted" />
            </div>
            <h4 className="text-white">Nenhum guia encontrado</h4>
            <p className="text-muted">Tente buscar com outros termos ou ajustar os filtros</p>
          </div>
        )}

        {/* Call to Action */}
        <Card className="card-dark border-purple mt-5">
          <Card.Body className="text-center p-4">
            <h5 className="text-purple mb-2">Quer compartilhar seu conhecimento?</h5>
            <p className="text-muted mb-3">Crie um guia e ajude outros jogadores a conquistarem seus troféus!</p>
            <Button variant="purple">
              Criar Novo Guia
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Guias;
