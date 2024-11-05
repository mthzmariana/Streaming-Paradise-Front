import React, { useContext } from "react";
import "./AdminNav.css";
import { useUser } from "../contexts/UserContext";
import Adminfoto from "../assets/imagenes/Admin-foto.png";
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
      </div>
      <div className="user-info">
        <img src={Adminfoto} alt="Perfil" className="w-8 h-8 rounded-full" />
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
