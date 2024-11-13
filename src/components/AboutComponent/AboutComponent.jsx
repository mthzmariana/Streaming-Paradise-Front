import React from "react";
import "./AboutComponent.css";
import historiaImage from "../../assets/imagenes/ImgTeam.jpg";
import queHacemosImage from "../../assets/imagenes/ImgCel.jpg";
import nosImportasImage from "../../assets/imagenes/ImgPersonas.jpg";

const AboutComponent = () => {
  return (
    <div className="about-page">
      <section className="intro-section">
        <h1>Nos emociona llevar la magia del entretenimiento hasta ti</h1>
        <p>
          Bienvenido a Streaming Paradise, la plataforma ideal para descubrir y
          apoyar a creadores audiovisuales. Aquí, los usuarios pueden explorar
          un catálogo diverso de contenido, desde películas y documentales hasta
          videoblogs, donde podrán calificar, comentar y disfrutar del talento
          emergente..
        </p>
        <p>
          Los creadores de contenido pueden difundir su trabajo mediante una
          suscripción, con la opción de acceder a beneficios adicionales a
          través de diferentes planes. Nuestro compromiso es ofrecer un espacio
          de crecimiento y visibilidad para quienes buscan compartir su
          creatividad con el mundo. ¡Únete a nosotros y explora un paraíso de
          entretenimiento!
        </p>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h2>Nuestra historia</h2>
          <p>
            Desde nuestros inicios, hemos evolucionado con la misión de apoyar a
            creadores audiovisuales. Empezamos como una plataforma de difusión
            digital y hoy en día nos enfocamos en ser un espacio donde el
            talento emergente encuentra su público y su oportunidad de brillar.
          </p>
          <img src={historiaImage} alt="Reunión de equipo" />
        </div>
        <div className="info-card">
          <h2>Qué hacemos</h2>
          <p>
            Ofrecemos un catálogo amplio y diverso de contenido creado por
            talentos independientes, accesible desde cualquier dispositivo
            conectado a internet. En Streaming Paradise, los usuarios pueden
            disfrutar, calificar y comentar cada obra, conectándose con los
            creadores de forma fácil y segura.
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
    </div>
  );
};

export default AboutComponent;
