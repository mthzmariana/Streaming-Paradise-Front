import React from 'react';
import "./AboutComponent.css";
import historiaImage from '../../assets/imagenes/ImgTeam.jpg';
import queHacemosImage from '../../assets/imagenes/ImgCel.jpg';
import nosImportasImage from '../../assets/imagenes/ImgPersonas.jpg';

const AboutComponent = () => {
  return (
   
    <div className="about-page">
      <section className="intro-section">
        <h1>Nos emociona llevar la magia del cine hasta ti.™</h1>
        <p>
          Streaming Paradise® es un video club creado para los amantes del cine que creen que comprar y disfrutar películas debe ser simple, divertido y accesible. Con nuestra selección curada y una experiencia fluida, hacemos que coleccionar películas sea un viaje emocionante para todos.
        </p>
        <p>
          En Streaming Paradise, estamos aquí para mejorar tu experiencia cinematográfica, no para complicarla. Por eso nos enfocamos en ofrecer grandes ofertas sin tarifas ocultas, largas esperas o complicaciones innecesarias.
        </p>
        <p>
          Bienvenido a tu paraíso cinematográfico. Se siente como en casa™.
        </p>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h2>Nuestra historia</h2>
          <p>
            Hemos sido un referente en la industria cinematográfica, comenzando en la venta de películas en formato físico y evolucionando para ofrecer nuestros servicios digitales.
          </p>
          <img src={historiaImage} alt="Reunión de equipo" />
        </div>
        <div className="info-card">
          <h2>Qué hacemos</h2>
          <p>
            Ofrecemos un catálogo de películas para comprar, accesible desde cualquier dispositivo con conexión a internet de forma segura y fácil de usar.
          </p>
          <img src={queHacemosImage} alt="Dispositivo móvil mostrando la app" />
        </div>
        <div className="info-card">
          <h2>Nos Importas</h2>
          <p>
            Nos esforzamos por proporcionar un servicio excepcional, queremos que cada visita a Popcorn Paradise sea una experiencia positiva y memorable.
          </p>
          <img src={nosImportasImage} alt="Grupo de personas disfrutando una película" />
        </div>
      </section>
    </div>

  );
};

export default AboutComponent;
