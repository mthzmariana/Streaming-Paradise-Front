// import React, { useState, useEffect } from 'react';
// import "./RegistroComponent.css";
// import Logo from "../../assets/imagenes/logo.png"; 


// const LoginComponent = ({handleNavbar, handleFooter}) => {

//   useEffect(() => {
//     handleNavbar(false);
//     handleFooter(false);

//     return () => {
//       handleNavbar(true);
//       handleFooter(true);
//     };
//   }, [handleNavbar, handleFooter]);

//   return (
//     <div className="Rlogin-body">
//     <div className="Rlogin-page">
//       <div className="Rlogin-container">
//         <div className="Rleft-side">
//           <img src={Logo} alt="Logo" className="Rlogo" />
//         </div>
//         <div className="Rright-side">
//           <h2 className="Rtitle">Streaming Paradise</h2>
//         <div className="Rinner-container">
//           <form className="Rform">
//             <input type="user" placeholder="Usuario" className="Rinput" />
//             <input type="email" placeholder="Correo" className="Rinput" />
//             <input type="password" placeholder="Contraseña" className="Rinput" />
//             <input type="year" placeholder="Edad" className="Rinput" />
//             <input type="gender" placeholder="Genero" className="Rinput" />
//             <input type="country" placeholder="Pais" className="Rinput" />
//             <input type="favorite" placeholder="Genero Favorito" className="Rinput" />

//             <button type="submit" className="Rlogin-button">
//               Iniciar Sesion
//             </button>
//             <p className="Rregister-text">
//               ¿No tienes cuenta? <a href="/">Regístrate aquí</a>
//             </p>
//           </form>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>
//   );
// };

// export default LoginComponent;

import React, { useEffect } from 'react';
import "./RegistroComponent.css";
import Logo from "../../assets/imagenes/Logo.png";  // Asegúrate de usar el mismo logo

const RegistroComponent = ({ handleNavbar, handleFooter }) => {
  useEffect(() => {
    handleNavbar(false);
    handleFooter(false);

    return () => {
      handleNavbar(true);
      handleFooter(true);
    };
  }, [handleNavbar, handleFooter]);

  return (
    <div className="registro-body">
      <div className="registro-container">
        <div className="reg-left-side">
          <img src={Logo} alt="Logo" className="reg-logo" />
        </div>
        <div className="reg-right-side">
          <h2 className="reg-title">Streaming Paradise</h2>
          <div className="reg-form-container">
            <form className="reg-form">
              <input type="text" placeholder="Usuario" className="reg-input" />
              <input type="email" placeholder="Correo" className="reg-input" />
              <input type="password" placeholder="Contraseña" className="reg-input" />
              <input type="number" placeholder="Edad" className="reg-input" />
              <input type="text" placeholder="Género" className="reg-input" />
              <input type="text" placeholder="País" className="reg-input" />
              <input type="text" placeholder="Género Favorito" className="reg-input" />

              <button type="submit" className="login-button">Registrarse</button>
              <p className="register-text">
                ¿Ya tienes cuenta? <a href="/">Inicia sesión aquí</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroComponent;
