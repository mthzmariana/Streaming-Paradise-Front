// import React from 'react';
// import './VideoPlayerComponent.css'; // Asegúrate de importar los estilos

// const VideoPlayerComponent = ({ videoUrl }) => {
//   // Función para extraer el ID del video de YouTube de la URL
//   const getYouTubeVideoId = (url) => {
//     const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   };

//   // Obtener el ID del video de YouTube
//   const videoId = getYouTubeVideoId(videoUrl);

//   if (!videoId) {
//     return <p>URL de video inválida.</p>;
//   }

//   return (
//     <div className="video-container">
//       <iframe
//         src={`https://www.youtube.com/embed/${videoId}`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default VideoPlayerComponent;
// ``
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import ReactStars from 'react-stars';
import './VideoPlayerComponent.css'; 

const VideoPlayerComponent = ({ videoUrl }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="video-player-component">
      <ReactPlayer url={videoUrl} controls width="100%" />
      
      <div className="video-details">
        <h3>Ranking de estrellas</h3>
        <ReactStars
          count={5}
          value={rating}
          onChange={ratingChanged}
          size={24}
          color2={'#ffd700'} // Color de las estrellas
        />
        <p>Calificación: {rating} estrellas</p>
      </div>
      <div className="comments-section">
        <h3>Comentarios</h3>
        <div className="add-comment">
          <input
            type="text"
            placeholder="Escribe un comentario..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Agregar comentario</button>
        </div>
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                {comment}
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