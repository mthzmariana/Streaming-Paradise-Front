import React, { useState, useContext, useEffect } from 'react';
import './Registro.css';

const Registro = ({handleFooter}) => {

  useEffect(() => {
    handleFooter(false);

    return () => {
      handleFooter(true);
    };
  }, [handleFooter]);

  return (
    <div>
      <h1>Registro</h1>
      <p>This is the Registro page of the Content Platform.</p>
    </div>
  );
};

export default Registro;
