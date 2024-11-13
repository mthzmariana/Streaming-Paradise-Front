import "./FooterComponent.css";
import React from "react";
import { FaDiscord } from "react-icons/fa";

function FooterComponent() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <h1>
            Streaming <br />
            Paradise
          </h1>
          <a
            href="https://discord.gg/VCcQFqSffY" // Reemplaza con el enlace de tu servidor de Discord
            target="_blank"
            rel="noopener noreferrer"
            className="discord-link"
          >
            <FaDiscord size={30} /> {/* Tamaño del ícono */}
          </a>
        </div>
        <div className="terminos">
          <p>Términos y aviso de privacidad,</p>
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
