import React from 'react';
import CustomCard from '../../components/CustomCard';
import Tag from '../../components/Tag';
import CustomGrid from '../../components/CustomGrid';
import CustomButton from '../../components/CustomButton';
import { sampleGames } from '../../sample';

const Home = () => (
  <section id="home" className="screen">
    <CustomCard style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
      <h2>Populares Recentemente</h2>
      <CustomGrid items={sampleGames} />
    </CustomCard>
    <CustomCard style={{ marginBottom: '1rem' }}>
      <h2>Resumo de Progresso</h2>
      <div className="progress" aria-label="Progresso total"><div style={{ width: '62%' }}></div></div>
      <p style={{ opacity: .8, marginTop: '0.5rem' }}>62% dos troféus dos seus jogos ativos</p>
      <CustomButton href="#trofeus">Ver troféus</CustomButton>
    </CustomCard>
    <CustomCard style={{ marginBottom: '1rem' }}>
      <h2>Biblioteca</h2>
      <p>24 jogos • 6 platinados</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Tag>Jogando</Tag>
        <Tag>Platinado</Tag>
        <Tag>Finalizado</Tag>
      </div>
      <div style={{ marginTop: '0.625rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <CustomButton href="#biblioteca">Abrir</CustomButton>
        <CustomButton href="#jogos" variant="outlined">Adicionar jogo</CustomButton>
      </div>
    </CustomCard>
    <CustomCard style={{ marginBottom: '1rem' }}>
      <h2>Desafio do Mês</h2>
      <p>Platine 1 indie em 30 dias</p>
      <CustomButton href="#ranking">Participar</CustomButton>
    </CustomCard>
    <CustomCard>
      <h2>Guia em destaque</h2>
      <p>Elden Ring: roadmap para platina em 60–80h</p>
      <CustomButton href="#guias">Ver guia</CustomButton>
    </CustomCard>
  </section>
);

export default Home;
