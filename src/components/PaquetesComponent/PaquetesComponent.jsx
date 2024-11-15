import React, { useState, useEffect } from 'react';
import './PaquetesComponent.css';
import Paq1 from '../../assets/imagenes/Paq1.png';
import Paq2 from '../../assets/imagenes/Paq2.png';
import Paq3 from '../../assets/imagenes/Paq3.png';
import { useUser } from '../../contexts/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaquetesComponent = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  // Efecto para obtener el ID del usuario del localStorage
  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromStorage && userFromStorage.id) {
      setUserId(userFromStorage.id);
      console.log("User ID found in localStorage:", userFromStorage.id);
    }
  }, []);

  const handlePaymentSuccess = async (details, selectedPackage) => {
    try {
      const roleMapping = {
        '50': 3,  // Novato
        '100': 4, // Artista
        '200': 5  // Estrella
      };
  
      const transactionData = {
        email_address: details.payer.email_address,
        name: `${details.payer.name.given_name} ${details.payer.name.surname}`,
        transaction_id: details.id,
        status: details.status,
        amount: details.purchase_units[0].amount.value,
        currency: details.purchase_units[0].amount.currency_code,
        payer_id: details.payer.payer_id,
        userId: userId,
        new_role: roleMapping[selectedPackage]
      };
  
      console.log("Sending transaction data:", transactionData);
  
      // Enviar la transacción y actualizar el rol en el backend
      const paymentResponse = await axios.post('http://localhost:5000/payments/capture', transactionData);
  
      if (paymentResponse.status === 200) {
        const updatedUser = { ...user, idrol: roleMapping[selectedPackage] };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
  
        alert('¡Compra exitosa! Tu cuenta ha sido actualizada.');
        closeModal();  // Cierra el modal de PayPal
        navigate('/'); // Redirige al home
      } else {
        console.error("Payment response was not 200:", paymentResponse);
      }
    } catch (error) {
      console.error('Error durante el proceso de compra:', error);
      alert('Hubo un error durante el proceso de compra. Por favor, intenta nuevamente.');
    }
  };

  useEffect(() => {
    if (selectedPackage) {
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
            onApprove: async (data, actions) => {
              const details = await actions.order.capture();
              console.log("Payment approved, details:", details);
              handlePaymentSuccess(details, selectedPackage);
            },
          }).render(containerId);
        };

        if (selectedPackage === '50') createPaypalButton('50.00', '#paypal-button-container');
        if (selectedPackage === '100') createPaypalButton('100.00', '#paypal-button-container');
        if (selectedPackage === '200') createPaypalButton('200.00', '#paypal-button-container');
      };
      document.body.appendChild(script);
    }
  }, [selectedPackage]);

  const closeModal = () => setSelectedPackage(null);

  return (
    <div className='container-paq'>
      {/* Modal */}
      {selectedPackage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Comprar Paquete de ${selectedPackage}</h2>
            <div id="paypal-button-container"></div>
          </div>
        </div>
      )}

      {/* Paquete Novato */}
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
          <button className="buy-button" onClick={() => setSelectedPackage('50')}>Comprar</button>
        </div>
      </div>

      {/* Paquete Artista */}
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
          <button className="buy-button" onClick={() => setSelectedPackage('100')}>Comprar</button>
        </div>
      </div>

      {/* Paquete Estrella */}
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
            <p className='cardp_row'>Visualiza el top 5 de mayores consumidores</p>
          </div>
          <button className="buy-button" onClick={() => setSelectedPackage('200')}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default PaquetesComponent;
