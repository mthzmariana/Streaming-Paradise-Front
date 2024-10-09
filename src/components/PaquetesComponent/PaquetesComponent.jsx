import React from 'react';
import './PaquetesComponent.css';
import Paq1 from '../../assets/imagenes/Paq1.png';
import Paq2 from '../../assets/imagenes/Paq2.png';
import Paq3 from '../../assets/imagenes/Paq3.png';

const PaquetesComponent = () => {
  return (
    <div className='container-paq'>

      <div className='cardp novato'>
        <div className='cardp_info'>
          <img src={Paq1} alt="Paquete 1" className='Paq1'/>
          <h2 className='cardp_sub'>Novato</h2>
          <p className='cardp_price'>$50.00 <span className='cardp_priceSpan'>/mes</span></p>
        </div>
        <div className='cardp_content'>
          <div className='cardp_rows'>
            <p className='cardp_row'>Sube tus vídeos</p>
          </div>
          <a href='#emptyLink' className='button_link'>Comprar</a>
        </div>
      </div>

      <div className='cardp'>
        <div className='cardp_info'>
        <img src={Paq2} alt="Paquete 2" className='Paq2'/>
          <h2 className='cardp_sub'>Artista</h2>
          <p className='cardp_price'>$100.00 <span className='cardp_priceSpan'>/mes</span></p>
        </div>
        <div className='cardp_content'>
          <div className='cardp_rows'>
            <p className='cardp_row'>Sube tus vídeos</p>
            <p className='cardp_row'>Ve tus calificaciones y comentarios</p>
          </div>
          <a href='#emptyLink' className='button_link'>Comprar</a>
        </div>
      </div>

      <div className='cardp'>
        <div className='cardp_info'>
        <img src={Paq3} alt="Paquete 3" className='Paq3'/>
          <h2 className='cardp_sub'>Estrella</h2>
          <p className='cardp_price'>$200.00 <span className='cardp_priceSpan'>/mes</span></p>
        </div>
        <div className='cardp_content'>
          <div className='cardp_rows'>
            <p className='cardp_row'>Sube tus vídeos</p>
            <p className='cardp_row'>Ve tus calificaciones y comentarios</p>
            <p className='cardp_row'>Visualiza el top 10 de creadores de Streaming Paradise</p>
          </div>
          <a href='#emptyLink' className='button_link'>Comprar</a>
        </div>
      </div>

    </div>
  );
};

export default PaquetesComponent;
