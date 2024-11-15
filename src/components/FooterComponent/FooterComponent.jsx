import "./FooterComponent.css";
import React, { useState } from "react";
import { FaDiscord, FaHeart } from "react-icons/fa";

function FooterComponent() {
  const [clickCount, setClickCount] = useState(0);

  const handleHeartClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 10) {
        window.location.href = "https://jcw87.github.io/c2-sans-fight/"; // Redirige a la página deseada
      }
      return newCount;
    });
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <h1>
            Streaming <br />
            Paradise
          </h1>
          <div className="icon-container">
            <a
              href="https://discord.gg/VCcQFqSffY"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-link"
            >
              <FaDiscord size={30} /> {/* Icono de Discord */}
            </a>
            <FaHeart
              size={30}
              className="heart-icon" // Clase para el estilo del corazón
              onClick={handleHeartClick} // Maneja el evento de clic
            />
          </div>
        </div>
        <div className="terminos">
          <p>Términos y aviso de privacidad</p>
          <p>Envíanos tus comentarios</p>
        </div>
        <div className="copyright">
          <p>© 1999-2024, streamingparadise.com, Inc. o sus filiales</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
