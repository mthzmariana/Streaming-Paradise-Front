import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import ReactPlayer from "react-player";
import ReactStars from "react-stars";
import "./VideoPlayerComponent.css";

const VideoPlayerComponent = ({ random }) => {
  const { id } = useParams();
  const location = useLocation();
  const { user } = useUser();
  const [videoData, setVideoData] = useState(null);
  const [creatorName, setCreatorName] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);
  const [views, setViews] = useState(0); // Estado para almacenar las visitas

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        if (random || location.pathname === "/sorprendeme") {
          const response = await fetch("http://localhost:5000/videos");
          const videos = await response.json();
          const randomVideo = videos[Math.floor(Math.random() * videos.length)];
          setVideoData(randomVideo);
          setViews(randomVideo.views);

          // Incrementar vistas para el video aleatorio
          await incrementViews(randomVideo.idvideo);

          const creatorResponse = await fetch(`http://localhost:5000/users/${randomVideo.creatorId}`);
          const creatorData = await creatorResponse.json();
          setCreatorName(creatorData.name);

          const commentsResponse = await fetch(`http://localhost:5000/comments/video/${randomVideo.idvideo}`);
          const commentsData = await commentsResponse.json();
          setComments(commentsData);
        } else {
          const response = await fetch(`http://localhost:5000/videos/${id}`);
          const data = await response.json();
          setVideoData(data);
          setViews(data.views);

          // Incrementar vistas para el video específico
          await incrementViews(data.idvideo);

          const creatorResponse = await fetch(`http://localhost:5000/users/${data.creatorId}`);
          const creatorData = await creatorResponse.json();
          setCreatorName(creatorData.name);

          const commentsResponse = await fetch(`http://localhost:5000/comments/video/${data.idvideo}`);
          const commentsData = await commentsResponse.json();
          setComments(commentsData);
        }
      } catch (error) {
        console.error("Error al obtener los datos del video o creador:", error);
      }
    };

    fetchVideoData();
  }, [id, random, location.pathname]);

  // Función para incrementar el contador de vistas
  const incrementViews = async (videoId) => {
    try {
      const response = await fetch(`http://localhost:5000/videos/increment-views/${videoId}`, {
        method: "POST",
      });
      const data = await response.json();
      if (data.views !== undefined) {
        setViews(data.views);
      }
    } catch (error) {
      console.error("Error al incrementar las visitas:", error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() && user) {
      try {
        const response = await fetch("http://localhost:5000/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idvideo: videoData.idvideo,
            iduser: user.id,
            comentario: newComment
          })
        });

        if (response.ok) {
          const savedComment = await response.json();
          const newCommentData = { ...savedComment, User: { name: user.name } };
          setComments([newCommentData, ...comments]);
          setNewComment("");
        }
      } catch (error) {
        console.error("Error al guardar el comentario:", error);
      }
    }
  };

  const ratingChanged = async (newRating) => {
    setRating(newRating);
    if (user) {
      try {
        const response = await fetch("http://localhost:5000/ratings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            score: newRating,
            iduser: user.id,
            idvideo: videoData.idvideo
          })
        });

        if (response.ok) {
          console.log("Puntaje guardado exitosamente");
        } else {
          console.error("Error al guardar el puntaje:", await response.text());
        }
      } catch (error) {
        console.error("Error al guardar el puntaje:", error);
      }
    } else {
      console.error("No hay usuario en sesión");
    }
  };

  if (!videoData) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="video-layout">
      <div className="video-player-wrapper">
        <ReactPlayer url={videoData.url} controls width="100%" className="video-player" />
      </div>
      <div className="video-info">
        <h2 className="video-title">{videoData.title}</h2>
        <p className="video-creator">Subido por: {creatorName}</p>
        <p className="video-description">{videoData.descripcion}</p>
        <p>Visitas: {views}</p> {/* Mostrar contador de visitas */}
        <div className="star-rating">
          <ReactStars
            count={5}
            value={rating}
            onChange={ratingChanged}
            size={24}
            half={true}
            color2={"#ffd700"}
          />
        </div>
        <p>Calificación: {rating} estrellas</p>
      </div>
      <div className="comments-section">
        <h3>Comentarios</h3>
        <div className="add-comment">
          <input
            type="text"
            placeholder="Agregar un comentario..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          />
          <button onClick={handleAddComment} className="comment-button">Comentar</button>
        </div>
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                <p className="comment-user"><strong>{comment.User?.name || "Usuario desconocido"}</strong> - <span className="comment-date">{new Date(comment.fecha).toLocaleString()}</span></p>
                <p className="comment-text">{comment.comentario}</p>
              </div>
            ))
          ) : (
            <p>No hay comentarios aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerComponent;
