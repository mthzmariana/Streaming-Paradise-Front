import React from 'react';
import "./DashboardComponent.css";
import GeneroComponent from '../../components/GraficasComponent/GeneroComponent';
import EdadesComponent from '../GraficasComponent/EdadesComponent';
import TopPaisesComponent from '../GraficasComponent/TopPaisesComponent';
import SubVendidaComponent from '../GraficasComponent/SubVendidaComponen';
import TopGeneroComponent from '../GraficasComponent/TopGeneroComponent';
import TotalUsuariosComponent from '../GraficasComponent/TotalUsuariosComponent';
import ComprasComponent from '../GraficasComponent/ComprasComponent';

const DashboardComponent = () => {
  return (
    <div className='dash-container'>
      <br />
      <br />
      <br />
      <h2 className='titulo-dash'></h2>
      <div className='graficas-container'>
      <div className='width-dash'>
          <TotalUsuariosComponent />
        </div>
        <div className='width-dash'>
          <SubVendidaComponent />
        </div>
        <div className='width-dash'>
            <GeneroComponent />
        </div>
        <div className='width-dash'>
          <EdadesComponent />
        </div>
        <div className='width-dash'>
          <TopPaisesComponent />
        </div>
        <div className='width-dash'>
          <TopGeneroComponent />
        </div>
        <div className='width-dash'>
          <ComprasComponent />
        </div>
        
      </div>
    </div>
  );
};

export default DashboardComponent;
