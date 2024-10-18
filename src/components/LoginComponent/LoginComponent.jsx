import React, { useState, useEffect } from 'react';
import "./LoginComponent.css";
import Logo from "../../assets/imagenes/Logo.png";


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
    <div className="login-body">
    <div className="login-page">
      <div className="login-container">
        <div className="left-side">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="right-side">
          <h2 className="title">Streaming Paradise</h2>
        <div className="inner-container">
          <form className="form">
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button type="submit" className="login-button">
              Iniciar Sesion
            </button>
            <p className="register-text">
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
