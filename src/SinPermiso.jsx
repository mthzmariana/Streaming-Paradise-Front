import React from 'react';

const SinPermiso = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: '0',
      color: 'black',
    }}>
      <div className="error404" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '100px', marginBottom: '10px' }}>404</h1>
        <p style={{ fontSize: '24px', marginBottom: '30px' }}>Lo sentimos, no tienes los permisos suficientes para acceder a este sitio.</p>
      </div>
    </div>
  );
};

export default SinPermiso;
