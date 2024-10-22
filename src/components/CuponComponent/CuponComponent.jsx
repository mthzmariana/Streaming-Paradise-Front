import React from 'react';
import './CuponComponent.css'; 

const CuponComponent = ({ couponCode, description }) => {
  return (
    <div className="Cupon-bar">
      <div className="Cupon-header">Cupón disponible</div>
      <div className="Cupon-code">{couponCode}Oct 22</div>
      <div className="Cupon-description">{description}Ingresa el cupón y obten a mitad de precio tu paquete de afiliado</div>
    </div>
  );
};

export default CuponComponent;
