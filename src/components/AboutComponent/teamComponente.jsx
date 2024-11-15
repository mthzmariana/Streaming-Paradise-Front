import React from "react";
import "./AboutComponent.css";
import historiaImage from "../../assets/imagenes/ImgTeam.jpg";
import queHacemosImage from "../../assets/imagenes/ImgCel.jpg";
import nosImportasImage from "../../assets/imagenes/ImgPersonas.jpg";
import member1Image from "../../assets/imagenes/member1.jpg"; // Reemplaza con las imágenes de los integrantes
import member2Image from "../../assets/imagenes/member2.jpg";
import member3Image from "../../assets/imagenes/member3.jpg";
import member4Image from "../../assets/imagenes/member4.jpg";
import member5Image from "../../assets/imagenes/member5.jpg";

const AboutComponent = () => {
  return (
    <div className="about-page">
      {/* Secciones anteriores */}
      
      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={member1Image} alt="Nombre del Integrante 1" />
            <h3>Nombre del Integrante 1</h3>
            <p>Puesto del Integrante 1</p>
          </div>
          <div className="team-member">
            <img src={member2Image} alt="Nombre del Integrante 2" />
            <h3>Nombre del Integrante 2</h3>
            <p>Puesto del Integrante 2</p>
          </div>
          <div className="team-member">
            <img src={member3Image} alt="Nombre del Integrante 3" />
            <h3>Nombre del Integrante 3</h3>
            <p>Puesto del Integrante 3</p>
          </div>
          <div className="team-member">
            <img src={member4Image} alt="Nombre del Integrante 4" />
            <h3>Nombre del Integrante 4</h3>
            <p>Puesto del Integrante 4</p>
          </div>
          <div className="team-member">
            <img src={member5Image} alt="Nombre del Integrante 5" />
            <h3>Nombre del Integrante 5</h3>
            <p>Puesto del Integrante 5</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;
