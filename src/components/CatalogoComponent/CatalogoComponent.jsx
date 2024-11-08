import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CatalogoComponent.css";

const CatalogoComponent = ({ handleFooter }) => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

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
  }, []);

  useEffect(() => {
    handleFooter(false);
    return () => handleFooter(true);
  }, [handleFooter]);

  const handleVideoClick = (id) => {
    navigate(`/video/${id}`);
  };

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
              <h3
                className="video-title"
                onClick={() => handleVideoClick(video.idvideo)}
                style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
              >
                {video.title}
              </h3>
              <p className="video-description">{video.descripcion}</p>
              <span className="video-genre">{video.genero}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default CatalogoComponent;
