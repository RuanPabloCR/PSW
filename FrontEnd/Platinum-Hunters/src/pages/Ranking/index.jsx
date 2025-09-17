import React from 'react';
import Card from '../../components/Card';
import Row from '../../components/Row';
import Meta from '../../components/Meta';
import Tag from '../../components/Tag';

const Ranking = () => (
  <section id="ranking" className="screen">
    <Card>
      <h2>Ranking Global</h2>
      <div className="list">
        <Row><Meta title="#1 @kaori" subtitle="153 platinas" /><Tag>S+ </Tag></Row>
        <Row><Meta title="#2 @nineko" subtitle="120 platinas" /><Tag>S</Tag></Row>
      </div>
    </Card>
    <Card>
      <h2>Desafio do Mês</h2>
      <p>Platine 1 indie em 30 dias</p>
      <a className="btn" href="#">Participar</a>
    </Card>
  </section>
);

export default Ranking;
