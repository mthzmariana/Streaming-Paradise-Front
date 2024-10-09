import React from "react";
import "./ContenidoComponent.css";

const ContenidoComponent = ({ peliculas }) => {
  return (
    <div className="canvas">
      <div id="hits">
        {peliculas.map((pelicula, index) => (
          <article key={index} className="movie">
            <img
              className="movie-image"
              src={pelicula.image}
              alt={pelicula.title}
            />
            <div className="movie-meta">
              <div className="movie-title">
                {pelicula.title}
                <span className="movie-year">{pelicula.year}</span>
              </div>
              <div className="movie-rating">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span
                      key={i}
                      className={`ais-star-rating--star ${
                        i < pelicula.rating ? "" : "__empty"
                      }`}
                    ></span>
                  ))}
              </div>
              <div className="movie-genres">
                {pelicula.genre.map((genre, i) => (
                  <div key={i} className="movie-genre">
                    {genre}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ContenidoComponent;
