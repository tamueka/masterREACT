import React, { Component } from "react";

class Pelicula extends Component {
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
          <a href="/detail">Leer más</a>

          <div className="clearfix"></div>
        </article>
      </div>
    );
  }
}

export default Pelicula;
