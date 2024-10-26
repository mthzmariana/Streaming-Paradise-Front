import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { IoPeopleOutline, IoCopyOutline, IoGlobeOutline } from 'react-icons/io5';
import "./SidebarCatalogoComponent.css";

const SidebarCatalogoComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar-filtros ${isExpanded ? "expanded" : "collapsed"}`}>
      <button className="expand-button" onClick={toggleSidebar}>
        {isExpanded ? "<<" : ">>"}
      </button>
      <ul className="filter-options">
        <li className="li-sidebar">
          <NavLink to="#" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoPeopleOutline className="icon" />
            <span className="ml-4">Creadores</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="#" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoCopyOutline className="icon" />
            <span className="ml-4">Tema</span>
          </NavLink>
        </li>
        <li className="li-sidebar">
          <NavLink to="#" className={({ isActive }) => (isActive ? "active" : "")}>
            <IoGlobeOutline className="icon" />
            <span className="ml-4">País</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarCatalogoComponent;
