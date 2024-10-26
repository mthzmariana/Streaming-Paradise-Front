import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import '../admin/AdminSidebar.css';
import { IoPeopleOutline, IoCopyOutline , IoCartOutline, IoPricetagsOutline, IoLogOutOutline, IoOptionsOutline, IoTicketOutline, IoLockClosedOutline } from 'react-icons/io5';
import axios from 'axios';

const AdminSidebar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/users/logout', {
        remember_token: user.remember_token 
      });
      if (response.status === 200) {
        const confirmLogout = window.confirm('¿Seguro quieres cerrar la sesión?');
        if (confirmLogout) {
          setUser(null); 
          alert('Sesión cerrada exitosamente');
          navigate('/login'); 
        }
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Hubo un error al cerrar sesión');
    }
  };

  return (
    <div className="admin-sidebar">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ul className="mt-6">
        <li className="li-sidebar">
          <NavLink to="/admin/usuarios/listado" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoPeopleOutline className="icon" />
            <span className="ml-4">Creadores</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/productos/listado" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoCopyOutline className="icon" />
            <span className="ml-4">Catálogo</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/compras/listado" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoCartOutline className="icon" />
            <span className="ml-4">Compras</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/permisos/listado" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoLockClosedOutline className="icon" />
            <span className="ml-4">Permisos</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/roles/listado" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoOptionsOutline className="icon" />
            <span className="ml-4">Roles</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/cupones/listado" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoTicketOutline className="icon" />
            <span className="ml-4">Cupones</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/ofertas/listado" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoPricetagsOutline className="icon" />
            <span className="ml-4">Ofertas</span>
          </NavLink>
        </li>
        <li className="li-sidebar cerrar-sesion">
          <button className="flex items-center w-full" onClick={handleLogout}>
            <IoLogOutOutline className="icon" /> 
            <span className="ml-4">Cerrar Sesión</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;

