import React from 'react';
import "./AboutComponent.css";
import historiaImage from "../../assets/imagenes/ImgTeam.jpg";
import queHacemosImage from "../../assets/imagenes/ImgCel.jpg";
import nosImportasImage from "../../assets/imagenes/ImgPersonas.jpg";
import Persona1 from "../../assets/imagenes/Persona1.jpg"; // Reemplaza con las imágenes de los integrantes
import Persona2 from "../../assets/imagenes/Persona2.jpg";
import Persona3 from "../../assets/imagenes/Persona3.jpg";
import Persona4 from "../../assets/imagenes/Persona4.jpg";
import Persona5 from "../../assets/imagenes/Persona5.jpg";

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
            Trabajamos para ofrecer una experiencia positiva en cada visita a
            Streaming Paradise. Valoramos la creatividad y la conexión con el
            público, asegurándonos de que cada creador y espectador encuentre un
            lugar especial en nuestra comunidad.
          </p>
          <img
            src={nosImportasImage}
            alt="Grupo de personas disfrutando una película"
          />
        </div>
      </section>

      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Persona1} alt="Nombre del Integrante 1" />
            <h3>Eduardo Uc</h3>
            <p>Puesto del Integrante 1</p>
          </div>
          <div className="team-member">
            <img src={Persona2} alt="Nombre del Integrante 2" />
            <h3>Yaneli</h3>
            <p>Puesto del Integrante 2</p>
          </div>
          <div className="team-member">
            <img src={Persona3} alt="Nombre del Integrante 3" />
            <h3>Cristian Cetz</h3>
            <p>Puesto del Integrante 3</p>
          </div>
          <div className="team-member">
            <img src={Persona4} alt="Nombre del Integrante 4" />
            <h3>M.Martinez</h3>
            <p>Puesto del Integrante 4</p>
          </div>
          <div className="team-member">
            <img src={Persona5} alt="Nombre del Integrante 5" />
            <h3>M.E.C.Y</h3>
            <p>Puesto del Integrante 5</p>
          </div>
        </div>
      </section>
      
    </div>

  );
};


export default AboutComponent;
