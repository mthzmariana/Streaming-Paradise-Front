import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import "./DashPerfilComponent.css";
import GeneroComponent from '../EstadisticasComponent/GeneroComponent';
import GeneroVideosComponent from '../EstadisticasComponent/GeneroVideosComponent';
import TopPaisesComponent from '../EstadisticasComponent/TopPaisesComponent';
import TotalUsuariosComponent from '../EstadisticasComponent/TotalUsuariosComponent';
import TotalViewsComponent from '../EstadisticasComponent/TotalViewsComponent';
import TopGeneroComponent from '../EstadisticasComponent/TopGeneroComponent';

const DashPerfilComponent = () => {
  const { user } = useUser(); // Obtén el usuario del contexto

  return (
    <div className='dash-perfil-container'>
      <h2 className='titulo-perfil-dash'></h2>
      <div className='graficas-perfil-container'>
        <div className='width-dash'>
          <TotalUsuariosComponent userId={user.id} />
        </div>
        <div className='width-dash'>
          <TotalViewsComponent userId={user.id}/>
        </div>
        <div className='width-dash'>
          <GeneroVideosComponent userId={user.id}/>
        </div>
        <div className='width-dash'>
          <TopGeneroComponent />
        </div>
        <div className='width-dash'>
          <TopPaisesComponent userId={user.id}/>
        </div>
        <div className='width-dash'>
          <GeneroComponent userId={user.id} />
        </div>
       
      </div>
    </div>
  );
};

export default DashPerfilComponent;
