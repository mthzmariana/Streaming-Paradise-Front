import React, { useState, useEffect } from 'react';
import './HomeOfertaComponent.css';
import Logo from "../../assets/imagenes/Logo.png";

const HomeOfertaComponent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 22,
    minutes: 10,
    seconds: 5,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="offer-bar">
      <div className="offer-bar-content">
        <h2>¡Oferta de fin de temporada!</h2>
        <p>Termina en:</p>
        <div className="timer">
          <span>{timeLeft.days} <small>días</small></span>
          <span>{timeLeft.hours} <small>horas</small></span>
          <span>{timeLeft.minutes} <small>minutos</small></span>
          <span>{timeLeft.seconds} <small>segundos</small></span>
        </div>
      </div>
      <div className="offer-bar-image">
        <img src={Logo} alt="Icono"/>
      </div>
    </div>
  );

};

export default HomeOfertaComponent;
