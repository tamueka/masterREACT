import React, { Component } from "react";
import MensajeEstatco from "./MensajeEstatico";

class Peliculas extends Component {
  render() {
    return (
      <div id="peliculas">
        <h4>Soy el componente de Peliculas</h4>
        <MensajeEstatco />
      </div>
    );
  }
}

export default Peliculas;
