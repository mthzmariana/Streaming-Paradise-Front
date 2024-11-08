import React from "react";
import "./ContenidoComponent.css";

const ContenidoComponent = ({ videos }) => {
  return (
    <div className="canvas">
      <div id="hits">
        {videos.map((video, index) => (
          <article key={index} className="video-card">
            <iframe
              className="video-frame"
              src={`https://www.youtube.com/embed/${getYouTubeID(video.url)}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-meta">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.descripcion}</p>
              <span className="video-genre">{video.genero}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

// Función para extraer el ID del video de YouTube de una URL
const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default ContenidoComponent;
