import React, { useState } from "react";
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
      <div className="filter-options">
        <button className="filter-button">Creadores</button>
        <button className="filter-button">Tema</button>
        <button className="filter-button">País</button>
        <button className="filter-button">Nuevos</button>
      </div>
    </div>
  );
};

export default SidebarCatalogoComponent;
