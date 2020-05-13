import React, { Component } from "react";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        titulo: "Batman vs Superman",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/911RR0tzL2L._SY445_.jpg",
      },
      {
        titulo: "Gran torino",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81TlD6oh2BL._SY445_.jpg",
      },
      {
        titulo: "El señor de los anillos",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/8112Bc4LpuL._SX342_.jpg",
      },
    ],
    nombre: "Samuel Ruiz",
  };
  render() {
    return (
      <div id="peliculas" className="content flex">
        <h2>Peliculas</h2>
        <h4>Lista de peliculas favoritas de {this.state.nombre}</h4>
        <div id="peliculas" className="peliculas">
          {this.state.peliculas.map((pelicula, i) => {
            return (
              <div id="articles" key={i}>
                <article className="article-item" id="article-template">
                  <h2>{pelicula.titulo}</h2>
                  <div className="image-wrap">
                    <img src={pelicula.image} alt={pelicula.titulo} />
                  </div>

                  <span className="date">Hace 5 minutos</span>
                  <a href="/detail">Leer más</a>

                  <div className="clearfix"></div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Peliculas;
