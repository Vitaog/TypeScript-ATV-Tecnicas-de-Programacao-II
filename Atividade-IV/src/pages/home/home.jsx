import React from 'react';
import "./style.css";
import NavBar from '../../components/navbar';
import ImagemPark from "../../assets/images/water-park-parque-aquatico.jpg"

const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className="home-container">
        <div className="card mx-auto my-5 p-3">
          <h1 className="welcome-heading">Bem-vindo ao Atlantis Park - O Seu Destino de Diversão Aquática!</h1>
          <div style={{ textAlign: 'center' }}>
            <img className='img-park' src={ImagemPark} alt="Imagem do Atlantis Park" />
          </div>
          <p className="welcome-text">
            Explore um mundo de entretenimento aquático inigualável, onde a diversão encontra o calor tropical do Brasil.
            No coração dessa experiência está o Atlantis Park, um oásis de alegria e aventura. Com mais de 20.000 metros quadrados,
            somos o maior parque aquático da América Latina, oferecendo uma atmosfera vibrante para famílias e amigos.
          </p>
          <p className="welcome-text">Em cada curva do Atlantis Park, você será envolvido por uma atmosfera mágica, onde a alegria contagia e as risadas ecoam. Nossas atrações aquáticas de última geração são cuidadosamente projetadas para despertar a emoção em cada visitante, oferecendo uma experiência aquática que vai além das expectativas.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
