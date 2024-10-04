import React from "react";
import "./SidebarFiltros.css";

const SidebarFiltros = () => {
  return (
    <div className="sidebar">
      <div className="facet">
        <div className="facet-title">Género</div>
        <div id="genres">
          <label>
            <input type="checkbox" /> Acción
          </label>
          <label>
            <input type="checkbox" /> Aventura
          </label>
          <label>
            <input type="checkbox" /> Drama
          </label>
        </div>
      </div>

      <div className="facet">
        <div className="facet-title">Creador</div>
        <div id="creators">
          <label>
            <input type="checkbox" /> Creador 1
          </label>
          <label>
            <input type="checkbox" /> Creador 2
          </label>
        </div>
      </div>

      <div className="facet">
        <div className="facet-title">Temas</div>
        <div id="themes">
          <label>
            <input type="checkbox" /> Tema 1
          </label>
          <label>
            <input type="checkbox" /> Tema 2
          </label>
        </div>
      </div>

      <div className="facet">
        <div className="facet-title">País</div>
        <div id="country">
          <label>
            <input type="checkbox" /> País 1
          </label>
          <label>
            <input type="checkbox" /> País 2
          </label>
        </div>
      </div>

      <div className="facet">
        <div className="facet-title">Nuevos</div>
        <div id="new">
          <label>
            <input type="checkbox" /> Últimos lanzamientos
          </label>
        </div>
      </div>
    </div>
  );
};

export default SidebarFiltros;