import React from 'react';
import Card from '../../components/CustomCard';
import Row from '../../components/Row';
import Meta from '../../components/Meta';

const Jogos = () => (
  <section id="jogos" className="screen">
    <Card>
      <h2>Explorar Jogos</h2>
      <div className="list">
        <Row>
          <Meta title="Ghost of Tsushima (PS5)" subtitle="Ação • 2020" />
          <a className="btn" href="#">Adicionar</a>
        </Row>
        <Row>
          <Meta title="Celeste (Xbox)" subtitle="Plataforma • 2018" />
          <a className="btn" href="#">Adicionar</a>
        </Row>
      </div>
    </Card>
  </section>
);

export default Jogos;
