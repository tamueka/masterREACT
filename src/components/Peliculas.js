import React, { Component } from "react";
import Pelicula from "./Pelicula";

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
      <div id="content" className="peliculas">
        <h2 className="subheader">Peliculas</h2>
        <h4>Lista de peliculas favoritas de {this.state.nombre}</h4>
        {/* COMPONENTE PELICULA */}
        {this.state.peliculas.map((pelicula, i) => {
          return <Pelicula 
                          key={i} 
                          pelicula={pelicula} 
                  />;
        })}
      </div>
    );
  }
}

export default Peliculas;
