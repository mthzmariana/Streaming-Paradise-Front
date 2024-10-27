import React, { useContext } from 'react';
import './AdminNav.css'; 
import { useUser } from '../contexts/UserContext';
import ImgHome1 from "../assets/imagenes/ImgHome1.png";
import LogoConRelleno from "../icons/logoconrelleno.jsx";

const AdminNav = () => {
    const { user, loading } = useUser();

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <nav className="admin-nav">
           <div className="logo-container-admin">
        <button className="MiniLogo-admin">
          <a href="/">
            <LogoConRelleno className="logo-a-admin" />
          </a>
        </button>
        <span className="navbar-title-admin">Streaming Paradise</span>
      </div>
            <div className="user-info">
                <img src={ImgHome1} alt="Perfil" className="w-8 h-8 rounded-full" />
                {user ? (
                    <span className="text-white">{user.name}</span>
                ) : (
                    <span className="text-white">Invitado</span>
                )}
            </div>
        </nav>
    );
};

export default AdminNav;
