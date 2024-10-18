import React, { useState, useEffect } from 'react';
import "./RegistroComponent.css";
import Logo from "../../assets/imagenes/logo.png"; 


const LoginComponent = ({handleNavbar, handleFooter}) => {

  useEffect(() => {
    handleNavbar(false);
    handleFooter(false);

    return () => {
      handleNavbar(true);
      handleFooter(true);
    };
  }, [handleNavbar, handleFooter]);

  return (
    <div className="Rlogin-body">
    <div className="Rlogin-page">
      <div className="Rlogin-container">
        <div className="Rleft-side">
          <img src={Logo} alt="Logo" className="Rlogo" />
        </div>
        <div className="Rright-side">
          <h2 className="Rtitle">Streaming Paradise</h2>
        <div className="Rinner-container">
          <form className="Rform">
            <input type="user" placeholder="Usuario" className="Rinput" />
            <input type="email" placeholder="Correo" className="Rinput" />
            <input type="password" placeholder="Contraseña" className="Rinput" />
            <input type="year" placeholder="Edad" className="Rinput" />
            <input type="gender" placeholder="Genero" className="Rinput" />
            <input type="country" placeholder="Pais" className="Rinput" />
            <input type="favorite" placeholder="Genero Favorito" className="Rinput" />

            <button type="submit" className="Rlogin-button">
              Iniciar Sesion
            </button>
            <p className="Rregister-text">
              ¿No tienes cuenta? <a href="/">Regístrate aquí</a>
            </p>
          </form>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default LoginComponent;