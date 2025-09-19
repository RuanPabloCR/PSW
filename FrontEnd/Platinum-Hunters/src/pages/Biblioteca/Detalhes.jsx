
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Trash2 } from 'lucide-react';
import { sampleGames } from '../../sample';

const Detalhes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const game = sampleGames.find(g => String(g.id) === String(id));

    const handleRemoveGame = () => {
        // Aqui você pode implementar a lógica para remover o jogo da biblioteca
        // Por exemplo, fazer uma chamada para a API ou atualizar o estado global
        console.log(`Removendo jogo ${game.name} da biblioteca`);
        // Redirecionar de volta para a biblioteca após remover
        navigate('/biblioteca');
    };

    if (!game) {
        return (
            <div className="bg-dark text-white min-vh-100">
                <Container className="py-4">
                    <div className="text-center">
                        <h2>Jogo não encontrado</h2>
                        <Button
                            variant="outline-light"
                            onClick={() => navigate('/biblioteca')}
                            className="mt-3"
                        >
                            Voltar para Biblioteca
                        </Button>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="bg-dark text-white min-vh-100">
            <Container className="py-4">
                <Card className="card-dark">
                    <Card.Body className="p-4">
                        <Row className="align-items-center">
                            <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
                                <img
                                    src={game.img}
                                    alt={game.name}
                                    className="img-fluid rounded"
                                    style={{
                                        maxWidth: '200px',
                                        aspectRatio: '3/4',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Col>
                            <Col xs={12} md={9} className="d-flex flex-column justify-content-center">
                                <div className="mb-4">
                                    <h1 className="fw-bold text-white mb-3">{game.name}</h1>
                                    <div className="mb-2">
                                        <span className="text-muted">Status: </span>
                                        <strong className="text-white">{game.status}</strong>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-muted">Progresso: </span>
                                        <strong className="text-white">{game.progresso}</strong>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 flex-wrap justify-content-center">
                                    <Button
                                        variant="outline-light"
                                        onClick={() => navigate('/biblioteca')}
                                    >
                                        Voltar para Biblioteca
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={handleRemoveGame}
                                        className="d-flex align-items-center gap-2"
                                    >
                                        <Trash2 size={16} />
                                        Remover da Biblioteca
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Detalhes;