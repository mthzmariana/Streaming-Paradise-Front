import React from 'react';
import './VideoPlayerComponent.css'; // Asegúrate de importar los estilos

const VideoPlayerComponent = ({ videoUrl }) => {
  // Función para extraer el ID del video de YouTube de la URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Obtener el ID del video de YouTube
  const videoId = getYouTubeVideoId(videoUrl);

  if (!videoId) {
    return <p>URL de video inválida.</p>;
  }

  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayerComponent;
``
