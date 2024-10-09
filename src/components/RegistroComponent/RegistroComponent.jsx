import React, { useState, useContext, useEffect } from 'react';
import './RegistroComponent.css';

const RegistroComponent = ({handleNavbar, handleFooter}) => {

  useEffect(() => {
    handleNavbar(false);
    handleFooter(false);

    return () => {
      handleNavbar(true);
      handleFooter(true);
    };
  }, [handleNavbar, handleFooter]);

  return (
    <div>
      <h1>Registro</h1>
      <p>This is the Registro page of the Content Platform.</p>
    </div>
  );
};

export default RegistroComponent;
