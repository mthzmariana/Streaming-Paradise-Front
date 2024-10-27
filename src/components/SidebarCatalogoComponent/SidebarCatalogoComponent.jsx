import React, { useState } from "react";
import { IoPeopleOutline, IoCopyOutline, IoGlobeOutline } from "react-icons/io5";
import "./SidebarCatalogoComponent.css";

const SidebarCatalogoComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDropdown = (type) => {
    setDropdown(dropdown === type ? null : type);
  };

  return (
    <div className={`sidebar-filtros ${isExpanded ? "expanded" : "collapsed"}`}>
      <button className="expand-button" onClick={toggleSidebar}>
        {isExpanded ? "<<" : ">>"}
      </button>
      <ul className="filter-options">
        <li className="li-sidebar">
          <button onClick={() => toggleDropdown("creadores")} className="dropdown-toggle">
            <IoPeopleOutline className="icon" />
            <span className="ml-4">Creadores</span>
          </button>
          {dropdown === "creadores" && (
            <ul className="dropdown-menu">
              <li>Rubious</li>
              <li>Ibai</li>
              <li>AuronPlay</li>
              <li>Baiti Bai</li>
              <li>German Garmendia</li>
            </ul>
          )}
        </li>
        <li className="li-sidebar">
          <button onClick={() => toggleDropdown("tema")} className="dropdown-toggle">
            <IoCopyOutline className="icon" />
            <span className="ml-4">Tema</span>
          </button>
          {dropdown === "tema" && (
            <ul className="dropdown-menu">
              <li>Música</li>
              <li>Video Juegos</li>
              <li>Comedia</li>
              <li>Documentales</li>
            </ul>
          )}
        </li>
        <li className="li-sidebar">
          <button onClick={() => toggleDropdown("pais")} className="dropdown-toggle">
            <IoGlobeOutline className="icon" />
            <span className="ml-4">País</span>
          </button>
          {dropdown === "pais" && (
            <ul className="dropdown-menu">
              <li>México</li>
              <li>España</li>
              <li>Argentina</li>
              <li>Colombia</li>
              <li>Chile</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SidebarCatalogoComponent;
