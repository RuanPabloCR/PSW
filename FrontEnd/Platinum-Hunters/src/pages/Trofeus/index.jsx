import React from 'react';
import Card from '../../components/Card';
import Row from '../../components/Row';
import Meta from '../../components/Meta';

const Trofeus = () => (
  <section id="trofeus" className="screen">
    <Card>
      <h2>Troféus — Hollow Knight</h2>
      <div className="list">
        <Row>
          <Meta title="Trial by Fury" subtitle="Raro • Prata" />
          <button className="btn">Marcar</button>
        </Row>
        <Row>
          <Meta title="Purist" subtitle="Ultra raro • Ouro" />
          <button className="btn">Desmarcar</button>
        </Row>
      </div>
    </Card>
    <Card>
      <h2>Progresso</h2>
      <div className="progress"><div style={{width:'72%'}}></div></div>
      <p style={{opacity:.8,marginTop:'0.5rem'}}>72% concluído • 29/40 troféus</p>
    </Card>
  </section>
);

export default Trofeus;
