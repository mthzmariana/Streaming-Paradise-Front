import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CatalogoComponent.css";

const CatalogoComponent = ({ handleFooter }) => {
  const [videos, setVideos] = useState([]);
  const [viewedVideos, setViewedVideos] = useState(new Set()); // Estado para los videos vistos
  const navigate = useNavigate();

  // Cargar videos y videos vistos desde localStorage al montar el componente
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/videos");
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();

    // Cargar videos vistos desde localStorage
    const viewedVideosData = JSON.parse(localStorage.getItem("viewedVideos")) || [];
    setViewedVideos(new Set(viewedVideosData));
  }, []);

  useEffect(() => {
    handleFooter(false);
    return () => handleFooter(true);
  }, [handleFooter]);

  // Función para manejar el clic en un video
  const handleVideoClick = (id) => {
    markAsViewed(id); // Marcar como visto
    navigate(`/video/${id}`);
  };

  // Función para marcar un video como visto
  const markAsViewed = (videoId) => {
    const updatedViewedVideos = new Set(viewedVideos);
    updatedViewedVideos.add(videoId);
    setViewedVideos(updatedViewedVideos);
    localStorage.setItem("viewedVideos", JSON.stringify(Array.from(updatedViewedVideos)));
  };

  return (
    <div className="canvas">
      <div id="hits">
        {videos.map((video, index) => {
          const isViewed = viewedVideos.has(video.idvideo); // Verifica si el video ha sido visto
          return (
            <article
              key={index}
              className={`video-card ${isViewed ? "viewed" : ""}`} // Añade una clase CSS si el video ya fue visto
            >
              <iframe
                className="video-frame"
                src={`https://www.youtube.com/embed/${getYouTubeID(video.url)}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-meta">
                <h3
                  className="video-title"
                  onClick={() => handleVideoClick(video.idvideo)}
                  style={{ cursor: "pointer", color: isViewed ? "gray" : "blue", textDecoration: "underline" }}
                >
                  {video.title}
                </h3>
                <p className="video-description">{video.descripcion}</p>
                <span className="video-genre">{video.genero}</span>
              </div>
            </article>
          );
        })}
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

export default CatalogoComponent;
