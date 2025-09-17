import React from 'react';
import Card from '../../components/Card';
import Row from '../../components/Row';
import Meta from '../../components/Meta';

const Guias = () => (
  <section id="guias" className="screen">
    <Card>
      <h2>Guias da Comunidade</h2>
      <div className="list">
        <Row>
          <Meta title="Hollow Knight 100%" subtitle="por @aria • Dificuldade: 7/10" />
          <a className="btn" href="#">Abrir</a>
        </Row>
        <Row>
          <Meta title="Celeste — Roadmap" subtitle="por @matt • Dificuldade: 8/10" />
          <a className="btn" href="#">Abrir</a>
        </Row>
      </div>
      <div style={{marginTop:'0.625rem'}}><a className="btn" href="#">Criar Guia</a></div>
    </Card>
  </section>
);

export default Guias;
