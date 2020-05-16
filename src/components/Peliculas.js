import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    var { peliculas } = this.state;
    //var random = Math.floor(Math.random() * 3)
    peliculas[0].titulo = "Batman Begins";

    this.setState({
      peliculas: peliculas,
    });
  };

  favorita = (pelicula, indice) => {
    console.log("FAVORITA MARCADA");
    console.log(pelicula, indice);
    //console.log(event)

    this.setState({
      favorita: pelicula,
    });
  };

  componentWillMount() {
    //console.log("Se va a montar el componente")
    this.setState({
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
      favorita: "",
    });
  }

  componentDidMount(){
    //console.log("Componente montado")
  }

  componentWillUnmount(){
    //console.log("Componente desmontado")
  }

  render() {
    return (
      <div id="peliculas">
        <Slider title="Peliculas" size="slider-small" />
        <div class="center">
          <div id="content" className="peliculas">
            <h2 className="subheader">Listado de Peliculas</h2>
            <h4>Lista de peliculas favoritas de {this.state.nombre}</h4>
            <button onClick={this.cambiarTitulo}>
              Cambiar titulo pelicula Batman
            </button>
            {this.state.favorita ? (
              <p className="favorita">
                <span>La pelicula favorita es: </span>
                <strong>{this.state.favorita.titulo}</strong>
              </p>
            ) : (
              <p>No hay pelicula favorita marcada</p>
            )}

            {/* COMPONENTE PELICULA */}
            {this.state.peliculas.map((pelicula, i) => {
              return (
                <Pelicula
                  key={i}
                  pelicula={pelicula}
                  indice={i}
                  marcarFavorita={this.favorita}
                />
              );
            })}
          </div>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Peliculas;
