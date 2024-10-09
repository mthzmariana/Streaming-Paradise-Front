import React, { useEffect } from "react";
import SidebarFiltros from "./SidebarFiltros";
import ContenidoCards from "./ContenidoCards";
import "./Catalogo.css";

const Catalogo = ({ handleFooter }) => {

  useEffect(() => {
    handleFooter(false); 

    return () => {
      handleFooter(true);
    };
  }, [handleFooter]);

  const peliculas = [
    {
      title: "Movie 1",
      year: 2022,
      rating: 4,
      genre: ["Action", "Adventure"],
      image: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/wUggWBMN8xUNVasYsroyUUPmaKa.jpg",
    },
    {
      title: "Movie 2",
      year: 2021,
      rating: 5,
      genre: ["Drama"],
      image: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/wUggWBMN8xUNVasYsroyUUPmaKa.jpg",
    },
  ];

  return (
    <div className="container-pel">
      <div className="content">
        <SidebarFiltros />
        <ContenidoCards peliculas={peliculas} />
      </div>
    </div>
  );
};

export default Catalogo;