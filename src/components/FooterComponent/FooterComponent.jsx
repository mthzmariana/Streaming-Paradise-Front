import "./FooterComponent.css";
import React from "react";

function FooterComponent() {
  return (
    <div>
      <footer className="footer">
        <div>
          <div>
            <h1>
              Streaming <br />
              Paradise
            </h1>
          </div>
          <div className="terminos">
            <p>Términos y aviso de privacidad</p>
            <p>Envianos tus comentarios</p>
          </div>
          <div className="copyright">
            <p>© 1999-2024, streamingparadise.com, Inc. o sus filiales</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;