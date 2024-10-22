import React from "react";
import "./ContactoComponent.css";
import Claqueta from "../../assets/imagenes/Claqueta.png";

const ContactoComponent = () => {
  return (
    <div className="contacto-body">
      <div className="contacto-container">
        <div className="contacto-left">
          <img src={Claqueta} alt="Clapboard" className="Claqueta-img" />
        </div>
        <div className="contacto-right">
          <form className="contact-form">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Joseph Kelce" />

            <label htmlFor="correo">Correo</label>
            <input type="email" id="correo" placeholder="joseph@email.com" />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              placeholder="Hola, tengo una duda..."
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactoComponent;
