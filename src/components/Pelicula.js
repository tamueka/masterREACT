import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component {

  marcar = () => {
    this.props.marcarFavorita(this.props.pelicula, this.props.indice)
  }

  render() {
    const { titulo, image } = this.props.pelicula; //RECOGEMOS EL VALOR DE PROPS Y HACEMOS DESTRUCTURING
    return (
      <div id="articles">
        <article className="article-item" id="article-template">
          <h2>{titulo}</h2>
          <div className="image-wrap">
            <img src={image} alt={titulo} />
          </div>
          <span className="date">Hace 5 minutos</span>
          <Link to="/blog">Leer más</Link>
          <button onClick={this.marcar}>
            Marcar como favorita
          </button>
          <div className="clearfix"></div>
        </article>
      </div>
    );
  }
}

export default Pelicula;
