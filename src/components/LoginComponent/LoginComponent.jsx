import React, { useEffect } from "react";
import "./LoginComponent.css";
import Logo from "../../assets/imagenes/Logo.png";

const LoginComponent = ({ handleNavbar, handleFooter }) => {
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
      <div className="login-container">
        <div className="log-left-side">
          <img src={Logo} alt="Logo" className="log-logo" />
        </div>
        <div className="log-right-side">
          <h2 className="log-title">Streaming Paradise</h2>
          <div className="log-form-container">
            <form className="log-form">
              <input type="email" placeholder="Email" className="log-input" />
              <input type="password" placeholder="Password" className="log-input" />
              <button type="submit" className="login-button">Iniciar Sesión</button>
              <p className="register-text">
                ¿No tienes cuenta? <a href="/">Regístrate aquí</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
