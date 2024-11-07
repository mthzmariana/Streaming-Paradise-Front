import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { IoVideocamOutline, IoPencilSharp, IoLogOutOutline } from 'react-icons/io5';
import axios from 'axios';
import './PerfilNovato.css';
import SubirVideoForm from './SubirVideoForm';
import EditarUsuarioComponent from './EditarUsuarioComponent';
import NovatoFoto from '../../assets/imagenes/Novato-foto.png';

function PerfilNovato() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [isFormVisible, setFormVisible] = useState(false);
  const [isEditVisible, setEditVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const toggleEdit = () => {
    setEditVisible(!isEditVisible);
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
    <div className="perfil-novato">
      <div className="card">
        <div className="card_load">
          <img src={NovatoFoto} alt="Perfil Novato" className="perfil-imagen" />
        </div>
        <div className="card_info">
          <div className="card_title">{user?.name || 'Nombre del Usuario'}</div>
          <div className="card_description">Email: {user?.email || 'No especificado'}</div>
          <div className="card_description-estrella">Género Favorito: {user?.favoriteGenre || 'No especificado'}</div>
          <div className="card_description-estrella">País: {user?.country || 'No especificado'}</div>
          <div className="card_description-estrella"> Edad: {user?.age || 'No especificado'}</div>
          <div className="card_description">Tipo de Suscripción: Novato</div>
          <div className="card_buttons">
            <button className="btn-subir-video" onClick={toggleForm}>
              <IoVideocamOutline size={20} /> {isFormVisible ? 'Cancelar' : 'Subir Video'}
            </button>
            <button className="btn-editar-perfil" onClick={toggleEdit}>
              <IoPencilSharp size={20} /> {isEditVisible ? 'Cancelar' : 'Editar Perfil'}
            </button>
            <button className="btn-cerrar-sesion" onClick={handleLogout}>
              <IoLogOutOutline size={20} /> Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {isFormVisible && (
        <div className="form-container">
          <SubirVideoForm formClass="subir-video-novato-form" setFormVisible={setFormVisible} />
        </div>
      )}

      {isEditVisible && (
        <div className="form-container">
          <EditarUsuarioComponent userId={user?.id} setEditVisible={setEditVisible} />
        </div>
      )}
    </div>
  );
}

export default PerfilNovato;
