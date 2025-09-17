import React from 'react';
import Card from '../../components/Card';
import Tag from '../../components/Tag';

const Home = () => (
  <section id="home" className="screen">
    <div className="grid">
      <Card>
        <h2>Resumo de Progresso</h2>
        <div className="progress" aria-label="Progresso total"><div style={{width:'62%'}}></div></div>
        <p style={{opacity:.8,marginTop:'0.5rem'}}>62% dos troféus dos seus jogos ativos</p>
        <a className="btn" href="#trofeus">Ver troféus</a>
      </Card>
      <Card>
        <h2>Biblioteca</h2>
        <p>24 jogos • 6 platinados</p>
        <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
          <Tag>Jogando</Tag>
          <Tag>Platinado</Tag>
          <Tag>Finalizado</Tag>
        </div>
        <div style={{marginTop:'0.625rem', display:'flex', gap:'0.5rem'}}>
          <a className="btn" href="#biblioteca">Abrir</a>
          <a className="btn ghost" href="#jogos">Adicionar jogo</a>
        </div>
      </Card>
      <Card>
        <h2>Desafio do Mês</h2>
        <p>Platine 1 indie em 30 dias</p>
        <a className="btn" href="#ranking">Participar</a>
      </Card>
      <Card>
        <h2>Guia em destaque</h2>
        <p>Elden Ring: roadmap para platina em 60–80h</p>
        <a className="btn" href="#guias">Ver guia</a>
      </Card>
    </div>
    <Card style={{marginTop:'1.5rem'}}>
      <h2>Populares Recentemente</h2>
      <div className="recently-trending" style={{display:'flex', gap:'1rem', justifyContent:'center', alignItems:'center', marginTop:'0.75rem'}}>
        <div style={{textAlign:'center'}}>
          <img src="https://upload.wikimedia.org/wikipedia/en/5/5d/Hollow_Knight_Silksong_first_cover_art.jpg" alt="Game 1" />
          <div style={{marginTop:'0.5rem', fontSize:'0.95rem'}}>Hollow Knight: Silksong</div>
        </div>
        <div style={{textAlign:'center'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PkpfjmguEnQbkqY2SCNqjoC_3hEJUmrTMQ&s" alt="Game 2" />
          <div style={{marginTop:'0.5rem', fontSize:'0.95rem'}}>Hollow Knight</div>
        </div>
        <div style={{textAlign:'center'}}>
          <img src="https://image.api.playstation.com/vulcan/ap/rnd/202406/0513/d35b305652ee922a72b4020bd5d6ef36675cf526dd4945d1.png" alt="Game 3" />
          <div style={{marginTop:'0.5rem', fontSize:'0.95rem'}}>Metal Gear Solid Delta: Snake Eater</div>
        </div>
        <div style={{textAlign:'center'}}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Clair_Obscur%2C_Expedition_33_Cover_1.webp/250px-Clair_Obscur%2C_Expedition_33_Cover_1.webp.png" alt="Game 4" />
          <div style={{marginTop:'0.5rem', fontSize:'0.95rem'}}>Clair Obscur: Expedition 33</div>
        </div>
        <div style={{textAlign:'center'}}>
          <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3527290/c6791f0f1b7b29f6304e283ac7a2cabc27c7eb0d/capsule_616x353.jpg?t=1757111056" alt="Game 5" />
          <div style={{marginTop:'0.5rem', fontSize:'0.95rem'}}>Peak</div>
        </div>
      </div>
    </Card>
  </section>
);

export default Home;
