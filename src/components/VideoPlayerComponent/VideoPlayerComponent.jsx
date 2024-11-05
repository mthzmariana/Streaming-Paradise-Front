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
// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import ReactStars from 'react-stars';
// import './VideoPlayerComponent.css'; 

// const VideoPlayerComponent = ({ videoUrl }) => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [rating, setRating] = useState(0);

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([...comments, newComment]);
//       setNewComment('');
//     }
//   };

//   const ratingChanged = (newRating) => {
//     setRating(newRating);
//   };

//   return (
//     <div className="video-player-component">
//       <ReactPlayer url={videoUrl} controls width="100%" />
      
//       <div className="video-details">
//         <h3>Ranking de estrellas</h3>
//         <ReactStars
//           count={5}
//           value={rating}
//           onChange={ratingChanged}
//           size={24}
//           color2={'#ffd700'} // Color de las estrellas
//         />
//         <p>Calificación: {rating} estrellas</p>
//       </div>
//       <div className="comments-section">
//         <h3>Comentarios</h3>
//         <div className="add-comment">
//           <input
//             type="text"
//             placeholder="Escribe un comentario..."
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//           />
//           <button onClick={handleAddComment}>Agregar comentario</button>
//         </div>
//         <div className="comments-list">
//           {comments.length > 0 ? (
//             comments.map((comment, index) => (
//               <div key={index} className="comment">
//                 {comment}
//               </div>
//             ))
//           ) : (
//             <p>No hay comentarios aún.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayerComponent;

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ReactStars from 'react-stars';
import './VideoPlayerComponent.css';

const VideoPlayerComponent = () => {
  const [videoData, setVideoData] = useState(null);
  const [creatorName, setCreatorName] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch('http://localhost:5000/videos/9'); // Ajusta la URL según tu API
        const data = await response.json();
        setVideoData(data);

        const creatorResponse = await fetch(`http://localhost:5000/users/${data.creatorId}`);
        const creatorData = await creatorResponse.json();
        setCreatorName(creatorData.name);

        // Obtener comentarios para este video
        const commentsResponse = await fetch(`http://localhost:5000/comments/video/${data.idvideo}`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Error al obtener los datos del video o creador:", error);
      }
    };

    fetchVideoData();
  }, []);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await fetch('http://localhost:5000/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            idvideo: videoData.idvideo,
            iduser: videoData.creatorId, // Ajusta este valor según el usuario que comenta
            comentario: newComment
          })
        });

        if (response.ok) {
          const savedComment = await response.json();
          setComments([...comments, savedComment]);
          setNewComment('');
        }
      } catch (error) {
        console.error("Error al guardar el comentario:", error);
      }
    }
  };

  // Guardar el rating en la base de datos
  const ratingChanged = async (newRating) => {
    setRating(newRating);
    try {
      const response = await fetch('http://localhost:5000/ratings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score: newRating,
          iduser: videoData.creatorId, // Ajusta este valor según el usuario que califica
          idvideo: videoData.idvideo
        })
      });

      if (!response.ok) {
        console.error("Error al guardar el puntaje:", await response.text());
      }
    } catch (error) {
      console.error("Error al guardar el puntaje:", error);
    }
  };

  if (!videoData) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="video-player-component">
      <h2 className="video-title">{videoData.title}</h2>
      <ReactPlayer url={videoData.url} controls width="100%" />

      <div className="video-details">
        <p className="video-creator">Subido por: {creatorName}</p>
        <p className="video-description">{videoData.descripcion}</p>

        <h3>Ranking de estrellas</h3>
        <ReactStars
          count={5}
          value={rating}
          onChange={ratingChanged}
          size={24}
          half={true} // Permite incrementos de 0.5
          color2={'#ffd700'}
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
                {comment.comentario} - <i>{comment.User?.name || "Usuario desconocido"}</i> - <small>{new Date(comment.fecha).toLocaleString()}</small>
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
