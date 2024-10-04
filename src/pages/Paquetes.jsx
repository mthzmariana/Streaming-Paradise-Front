import React from 'react';
import './Paquetes.css';
import Paq1 from '../assets/imagenes/Paq1.png';
import Paq2 from '../assets/imagenes/Paq2.png';
import Paq3 from '../assets/imagenes/Paq3.png';

const Paquetes = () => {
  return (
    <div className='container-paq'>

      <div className='card novato'>
        <div className='card_info'>
          <img src={Paq1} alt="Paquete 1" className='Paq1'/>
          <h2 className='card_name'>Novato</h2>
          <p className='card_price'>$50.00 <span className='card_priceSpan'>/mes</span></p>
        </div>
        <div className='card_content'>
          <div className='card_rows'>
            <p className='card_row'>Beneficio</p>
          </div>
          <a href='#emptyLink' className='card_link'>Comprar</a>
        </div>
      </div>

      <div className='card'>
        <div className='card_info'>
        <img src={Paq2} alt="Paquete 2" className='Paq2'/>
          <h2 className='card_name'>Artista</h2>
          <p className='card_price'>$10.00 <span className='card_priceSpan'>/mes</span></p>
        </div>
        <div className='card_content'>
          <div className='card_rows'>
            <p className='card_row'>Beneficio</p>
            <p className='card_row'>Beneficio</p>
          </div>
          <a href='#emptyLink' className='card_link'>Comprar</a>
        </div>
      </div>

      <div className='card'>
        <div className='card_info'>
        <img src={Paq3} alt="Paquete 3" className='Paq3'/>
          <h2 className='card_name'>Estrella</h2>
          <p className='card_price'>$200.00 <span className='card_priceSpan'>/mes</span></p>
        </div>
        <div className='card_content'>
          <div className='card_rows'>
            <p className='card_row'>Beneficio</p>
            <p className='card_row'>Beneficio</p>
            <p className='card_row'>Beneficio</p>
          </div>
          <a href='#emptyLink' className='card_link'>Comprar</a>
        </div>
      </div>

    </div>
  );
};

export default Paquetes;
