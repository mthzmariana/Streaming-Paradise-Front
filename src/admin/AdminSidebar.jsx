import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import '../admin/AdminSidebar.css';
import {
  IoPeopleOutline,
  IoCopyOutline,
  IoCartOutline,
  IoPricetagsOutline,
  IoLogOutOutline,
  IoOptionsOutline,
  IoTicketOutline,
  IoLockClosedOutline,
  IoPodiumOutline,
  IoTvOutline,
  IoChatbubbleEllipsesOutline 
} from 'react-icons/io5';
import axios from 'axios';

const AdminSidebar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className={`admin-sidebar ${isExpanded ? 'expanded' : ''}`}>
      <button className="expand-button" onClick={toggleSidebar}>
        {isExpanded ? '<<' : '>>'}
      </button>
      <br></br>
      <br></br>
      <ul className="mt-6">
      <li className="li-sidebar">
          <NavLink to="/admin/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoPodiumOutline className="icon" />
            <span className="ml-4">Dash</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/usuarios/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoPeopleOutline className="icon" />
            <span className="ml-4">Creadores</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/productos/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoCopyOutline  className="icon" />
            <span className="ml-4">Suscripciónes</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/catalogo/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoTvOutline className="icon" />
            <span className="ml-4">Catálogo</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/compras/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoCartOutline className="icon" />
            <span className="ml-4">Compras</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/permisos/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoLockClosedOutline className="icon" />
            <span className="ml-4">Permisos</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/roles/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoOptionsOutline className="icon" />
            <span className="ml-4">Roles</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/comentarios/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoChatbubbleEllipsesOutline  className="icon" />
            <span className="ml-4">Comentarios</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/cupones/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoTicketOutline className="icon" />
            <span className="ml-4">Cupones</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="/admin/ofertas/listado" className={({ isActive }) => (isActive ? 'active' : '')}>
            <IoPricetagsOutline className="icon" />
            <span className="ml-4">Ofertas</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
