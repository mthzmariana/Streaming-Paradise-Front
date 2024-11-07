import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { IoVideocamOutline, IoPencilSharp, IoLogOutOutline, IoMailUnreadOutline,IoStarOutline, IoPeopleOutline } from 'react-icons/io5';
import axios from 'axios';
import './PerfilEstrella.css';
import SubirVideoForm from './SubirVideoForm';
import EditarUsuarioComponent from './EditarUsuarioComponent';
import EstrellaFoto from '../../assets/imagenes/Estrella-foto.png';
import Comments from './Comments';
import Calificaciones from './Calificaciones';
import TopConsumidores from './TopConsumidores';

function PerfilEstrella() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [isFormVisible, setFormVisible] = useState(false);
  const [isEditVisible, setEditVisible] = useState(false);
  const [isCommentsVisible, setCommentsVisible] = useState(false);
  const [isCalificacionesVisible, setCalificacionesVisible] = useState(false);
  const [isTopConsumidoresVisible, setTopConsumidoresVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const toggleEdit = () => {
    setEditVisible(!isEditVisible);
  };
  const toggleCommentsForm = () => {
    setCommentsVisible(!isCommentsVisible);
  };
  const toggleCalificacionesForm = () => {
    setCalificacionesVisible(!isCalificacionesVisible);
  };
  const toggleTopConsumidoresForm = () => {
    setTopConsumidoresVisible(!isTopConsumidoresVisible);
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
    <div className="perfil-estrella">
      <div className="card-estrella">
        <div className="card_load-estrella">
          <img src={EstrellaFoto} alt="Perfil Novato" className="perfil-imagen-estrella" />
        </div>
        <div className="card_info-estrella">
          <div className="card_title-estrella">{user?.name || 'Nombre del Usuario'}</div>
          <div className="card_description-estrella">Email: {user?.email || 'No especificado'}</div>
          <div className="card_description-estrella">Género Favorito: {user?.favoriteGenre || 'No especificado'}</div>
          <div className="card_description-estrella">País: {user?.country || 'No especificado'}</div>
          <div className="card_description-estrella"> Edad: {user?.age || 'No especificado'}</div>
          <div className="card_description-estrella">Tipo de Suscripción: Estrella</div>
          <div className="card_buttons-estrella">
            <button className="btn-subir-video-estrella" onClick={toggleForm}>
              <IoVideocamOutline size={20} /> {isFormVisible ? 'Cancelar' : 'Subir Video'}
            </button>
            <button className="btn-subir-video-estrella" onClick={toggleCommentsForm}>
              <IoMailUnreadOutline size={20} /> {isCommentsVisible ? 'Cancelar' : 'Comentarios'}
            </button>
            <button className="btn-subir-video-estrella" onClick={toggleCalificacionesForm}>
              <IoStarOutline size={20} /> {isCalificacionesVisible ? 'Cancelar' : 'Calificaciones'}
            </button>
            <button className="btn-subir-video-estrella" onClick={toggleTopConsumidoresForm}>
              <IoPeopleOutline size={20} /> {isTopConsumidoresVisible ? 'Cancelar' : 'Consumidores'}
            </button>
            <button className="btn-editar-perfil-estrella" onClick={toggleEdit}>
              <IoPencilSharp size={20} /> {isEditVisible ? 'Cancelar' : 'Editar Perfil'}
            </button>
            <button className="btn-cerrar-sesion-estrella" onClick={handleLogout}>
              <IoLogOutOutline size={20} /> Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {isFormVisible && (
        <div className="form-container-estrella">
          <SubirVideoForm formClass="subir-video-estrella-form-estrella" setFormVisible={setFormVisible} />
        </div>
      )}
      {isCommentsVisible && (
        <div className="form-container-artista">
          <Comments userId={user?.id} setCommentsVisible={setCommentsVisible} />
        </div>
      )}
      {isCalificacionesVisible && (
        <div className="form-container-artista">
          <Calificaciones userId={user?.id} setCalificacionesVisible={setCalificacionesVisible} />
        </div>
      )}
       {isTopConsumidoresVisible && (
        <div className="form-container-artista">
          <TopConsumidores userId={user?.id} setTopConsumidoresVisible={setTopConsumidoresVisible} />
        </div>
      )}

      {isEditVisible && (
        <div className="form-container-estrella">
          <EditarUsuarioComponent userId={user?.id} setEditVisible={setEditVisible} />
        </div>
      )}
    </div>
  );
}

export default PerfilEstrella;
