import React, { useState } from "react";
import "./HomeComponent.css";
import ImgHome1 from "../../assets/imagenes/ImgHome1.png";
import ImgHome2 from "../../assets/imagenes/ImgHome2.png";
import ImgHome3 from "../../assets/imagenes/ImgHome3.png";
import CarritoIcon from "../../icons/carritoicon.jsx";
import TarjetaIcon from "../../icons/tarjetaicon.jsx";
import ComprarIcon from "../../icons/compraricon.jsx";
import LogoConRelleno from "../../icons/logoconrelleno.jsx";

const pestanas = [
  {
    id: "pestana-1",
    icon: <CarritoIcon />,
    label: "Elige",
    img: ImgHome1,
    text: "Si eres creador, elige un plan adecuado para tí",
  },
  {
    id: "pestana-2",
    icon: <TarjetaIcon />,
    label: "Paga",
    img: ImgHome2,
    text: "Paga el total desde la comodidad de tu casa",
  },
  {
    id: "pestana-3",
    icon: <ComprarIcon />,
    label: "Sé parte",
    img: ImgHome3,
    text: "Ahora los usuarios podrán conocer que haces y disfrutarlo desde casa o donde sea",
  },
];

const HomeComponent = () => {
  const [pestanaActiva, setPestanaActiva] = useState("pestana-1");

  return (
    <div>
      <section>
        <div className="contenedor-padre">
          <div className="contenedor-izquierdo">
            <h1>Mira y disfruta</h1>
            <h2>Prueba el verdadero paraíso del entretenimiento en línea</h2>
          </div>
          <div className="circulo-azul">
            <LogoConRelleno className="logo-b" />
          </div>
        </div>
      </section>

      <section className="pestanas">
        <div className="contenedor-pes">
          {pestanas.map((pestana) => (
            <div
              key={pestana.id}
              id={pestana.id}
              className={`pestana-item ${
                pestanaActiva === pestana.id ? "pestana-borde" : ""
              }`}
              onClick={() => setPestanaActiva(pestana.id)}
            >
              <i>{pestana.icon}</i>
              <p>{pestana.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contenido-pestana">
        <div className="contenedor-pes">
          {pestanas.map((pestana) => (
            <div
              key={`${pestana.id}-contenido`}
              id={`${pestana.id}-contenido`}
              className={`contenido-pestana-item ${
                pestanaActiva === pestana.id ? "mostrar" : ""
              }`}
            >
              <div className={`${pestana.id}-contenido-interno`}>
                <div>
                  <p className="texto-pes">{pestana.text}</p>
                </div>
                <img className="imagenInicio" src={pestana.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
