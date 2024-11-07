import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { IoVideocamOutline, IoPencilSharp, IoLogOutOutline, IoMailUnreadOutline, IoStarOutline } from 'react-icons/io5';
import axios from 'axios';
import './PerfilArtista.css';
import SubirVideoForm from './SubirVideoForm';
import EditarUsuarioComponent from './EditarUsuarioComponent';
import ArtistaFoto from '../../assets/imagenes/Artista-foto.png';
import Comments from './Comments';
import Calificaciones from './Calificaciones';
import TopConsumidores from './TopConsumidores';

function PerfilArtista() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [isVideoFormVisible, setVideoFormVisible] = useState(false);
  const [isCommentsVisible, setCommentsVisible] = useState(false);
  const [isEditVisible, setEditVisible] = useState(false);
  const [isCalificacionesVisible, setCalificacionesVisible] = useState(false);
  

  const toggleVideoForm = () => {
    setVideoFormVisible(!isVideoFormVisible);
  };

  const toggleCommentsForm = () => {
    setCommentsVisible(!isCommentsVisible);
  };

  const toggleEdit = () => {
    setEditVisible(!isEditVisible);
  };
  const toggleCalificacionesForm = () => {
    setCalificacionesVisible(!isCalificacionesVisible);
  };
 

  const handleLogout = async () => {
    const confirmLogout = window.confirm('¿Seguro quieres cerrar la sesión?');
    if (confirmLogout) {
      try {
        const response = await axios.post('http://localhost:5000/users/logout', {
          remember_token: user.remember_token 
        });
        if (response.status === 200) {
          setUser(null); 
          alert('Sesión cerrada exitosamente');
          navigate('/login'); 
        }
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        alert('Hubo un error al cerrar sesión');
      }
    }
  };

  return (
    <div className="perfil-artista">
      <div className="card-artista">
        <div className="card_load-artista">
          <img src={ArtistaFoto} alt="Perfil Novato" className="perfil-imagen-artista" />
        </div>
        <div className="card_info-artista">
          <div className="card_title-artista">{user?.name || 'Nombre del Usuario'}</div>
          <div className="card_description-artista">Gmail: {user?.email || 'No especificado'}</div>
          <div className="card_description-estrella">Género Favorito: {user?.favoriteGenre || 'No especificado'}</div>
          <div className="card_description-estrella">País: {user?.country || 'No especificado'}</div>
          <div className="card_description-estrella">Edad: {user?.age || 'No especificado'}</div>
          <div className="card_description-artista">Tipo de Suscripción: Artista</div>
          <div className="card_buttons-artista">
            <button className="btn-subir-video-artista" onClick={toggleVideoForm}>
              <IoVideocamOutline size={20} /> {isVideoFormVisible ? 'Cancelar' : 'Subir Video'}
            </button>
            <button className="btn-subir-video-estrella" onClick={toggleCommentsForm}>
              <IoMailUnreadOutline size={20} /> {isCommentsVisible ? 'Cancelar' : 'Comentarios'}
            </button>
            <button className="btn-subir-video-estrella" onClick={toggleCalificacionesForm}>
              <IoStarOutline size={20} /> {isCalificacionesVisible ? 'Cancelar' : 'Calificaciones'}
            </button>
            <button className="btn-editar-perfil-artista" onClick={toggleEdit}>
              <IoPencilSharp size={20} /> {isEditVisible ? 'Cancelar' : 'Editar Perfil'}
            </button>
            <button className="btn-cerrar-sesion-artista" onClick={handleLogout}>
              <IoLogOutOutline size={20} /> Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {isVideoFormVisible && (
        <div className="form-container-artista">
          <SubirVideoForm formClass="subir-video-artista-form-artista" setFormVisible={setVideoFormVisible} />
        </div>
      )}

      {isCommentsVisible && (
        <div className="form-container-artista">
          <Comments userId={user?.id} setEditVisible={setEditVisible} />
        </div>
      )}
 {isCalificacionesVisible && (
        <div className="form-container-artista">
          <Calificaciones userId={user?.id} setCalificacionesVisible={setCalificacionesVisible} />
        </div>
      )}
      {isEditVisible && (
        <div className="form-container-artista">
          <EditarUsuarioComponent userId={user?.id} setEditVisible={setEditVisible} />
        </div>
      )}
    </div>
  );
}

export default PerfilArtista;
