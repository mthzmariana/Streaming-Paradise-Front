import React, { useEffect } from 'react';
import './PaquetesComponent.css';
import Paq1 from '../../assets/imagenes/Paq1.png';
import Paq2 from '../../assets/imagenes/Paq2.png';
import Paq3 from '../../assets/imagenes/Paq3.png';

const PaquetesComponent = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AWGD2AfDr_V-jJDKsZURjp_8nX_V0f0HIOpjcHArkLuepfP3Bfpc2-JUyzj50kpABNYoOZrTXUadeYkN&currency=USD";
    script.async = true;
    script.onload = () => {
      const createPaypalButton = (amount, containerId) => {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount,
                },
              }],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              alert(`Transacción completada por ${details.payer.name.given_name}`);
            });
          },
        }).render(containerId);
      };

      // Crear botones de PayPal para cada paquete
      createPaypalButton('50.00', '#paypal-button-novato');
      createPaypalButton('100.00', '#paypal-button-artista');
      createPaypalButton('200.00', '#paypal-button-estrella');
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className='container-paq'>

      <div className='cardp novato'>
        <div className='cardp_info'>
          <img src={Paq1} alt="Paquete 1" className='Paq1' />
          <h2 className='cardp_sub'>Novato</h2>
          <p className='cardp_price'>$50.00 <span className='cardp_priceSpan'>/mes</span></p>
        </div>
        <div className='cardp_content'>
          <div className='cardp_rows'>
            <p className='cardp_row'>Sube tus vídeos</p>
          </div>
          <div id='paypal-button-novato'></div> {/* Aquí se renderiza el botón de PayPal */}
        </div>
      </div>

      <div className='cardp'>
        <div className='cardp_info'>
          <img src={Paq2} alt="Paquete 2" className='Paq2' />
          <h2 className='cardp_sub'>Artista</h2>
          <p className='cardp_price'>$100.00 <span className='cardp_priceSpan'>/mes</span></p>
        </div>
        <div className='cardp_content'>
          <div className='cardp_rows'>
            <p className='cardp_row'>Sube tus vídeos</p>
            <p className='cardp_row'>Ve tus calificaciones y comentarios</p>
          </div>
          <div id='paypal-button-artista'></div> {/* Aquí se renderiza el botón de PayPal */}
        </div>
      </div>

      <div className='cardp'>
        <div className='cardp_info'>
          <img src={Paq3} alt="Paquete 3" className='Paq3' />
          <h2 className='cardp_sub'>Estrella</h2>
          <p className='cardp_price'>$200.00 <span className='cardp_priceSpan'>/mes</span></p>
        </div>
        <div className='cardp_content'>
          <div className='cardp_rows'>
            <p className='cardp_row'>Sube tus vídeos</p>
            <p className='cardp_row'>Ve tus calificaciones y comentarios</p>
            <p className='cardp_row'>Visualiza el top 10 de creadores de Streaming Paradise</p>
          </div>
          <div id='paypal-button-estrella'></div> {/* Aquí se renderiza el botón de PayPal */}
        </div>
      </div>

    </div>
  );
};

export default PaquetesComponent;

