import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";
import "./LoginComponent.css";
import Logo from "../../assets/imagenes/Logo.png";

const LoginComponent = ({ handleNavbar, handleFooter }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUser } = useUser();

  useEffect(() => {
    handleNavbar(false);
    handleFooter(false);
    return () => {
      handleNavbar(true);
      handleFooter(true);
    };
  }, [handleNavbar, handleFooter]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users/login", { email, password });
      
      if (response.data && response.data.rememberToken && response.data.user) {
        const { rememberToken, user } = response.data;
        
        localStorage.setItem("token", rememberToken);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        if (user.idrol === 1) {
          navigate("/admin");
        } else if (user.idrol === 2) {
          navigate("/");
        } else if (user.idrol === 3) {
          navigate("/perfil/artista");
        } else if (user.idrol === 4) {
          navigate("/perfil/novato");
        } else if (user.idrol === 5) {
          navigate("/perfil/estrella");
        } else {
          console.error("Rol de usuario no reconocido");
          setError("Rol de usuario no reconocido");
        }
      } else {
        setError("Error en la respuesta del servidor");
        console.error("Error: Respuesta no válida del servidor", response.data);
      }
    } catch (err) {
      setError("Credenciales inválidas o error en el servidor");
      console.error("Error al iniciar sesión:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="log-left-side">
          <img src={Logo} alt="Logo" className="log-logo" />
        </div>
        <div className="log-right-side">
          <h2 className="log-title">Streaming Paradise</h2>
          <div className="log-form-container">
            <form className="log-form" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className="log-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="log-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login-button">
                Iniciar Sesión
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <p className="register-text">
                ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
