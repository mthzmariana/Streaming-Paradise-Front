import React from "react";
import "./NavbarComponent.css";
import LogoConRelleno from "../../icons/logoconrelleno.jsx";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <button className="MiniLogo">
          <a href="/">
            <LogoConRelleno className="logo-a" />
          </a>
        </button>
        <span className="navbar-title">Streaming Paradise</span>
      </div>
      <div className="nav-links-container">
        <div className="nav-links center-links">
          <a href="/catalogo">Contenido</a>
          <a href="/about">Acerca de</a>
          <a href="/contacto">Contacto</a>
        </div>
        <div className="nav-links right-links">
          <a href="/login">Iniciar sesión</a>
          <a href="/registro">Registrarse</a>
        </div>
      </div>
      <button
        className="mobile-menu-icon"
        onClick={() => {
          document
            .querySelector(".nav-links-container")
            .classList.toggle("active");
        }}
      >
        ☰
      </button>
    </nav>
  );
};

export default NavbarComponent;
