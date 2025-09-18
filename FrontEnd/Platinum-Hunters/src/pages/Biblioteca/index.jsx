import React from 'react';
import Card from '../../components/CustomCard';
import Tag from '../../components/Tag';
import Row from '../../components/Row';
import Meta from '../../components/Meta';
import { Link } from 'react-router-dom';

const Biblioteca = () => (
  <section id="biblioteca" className="screen">
    <Card>
      <h2>Minha Biblioteca</h2>
      <div className="list">
        <Row>
          <Meta title="Hollow Knight (PS4)" subtitle="Status: Jogando • Progresso 72%" />
          <Link className="btn" to="/biblioteca/detalhes">Detalhes</Link>
        </Row>
        <Row>
          <Meta title="Stardew Valley (Steam)" subtitle="Status: Finalizado • Progresso 48%" />
          <Link className="btn" to="/biblioteca/detalhes">Detalhes</Link>
        </Row>
      </div>
    </Card>
    <Card>
      <h2>Filtros</h2>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Tag>Jogando</Tag>
        <Tag>Platinado</Tag>
        <Tag>Abandonado</Tag>
        <Tag>PSN</Tag>
        <Tag>Steam</Tag>
      </div>
    </Card>
  </section>
);

export default Biblioteca;
