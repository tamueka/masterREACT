import React, { Component } from "react";
import MiComponente from "../components/MiComponente";
import Peliculas from "../components/Peliculas";

class SeccionPruebas extends Component {

  contador = 0;
  
/*   constructor(props) {   FORMA LARGA
    super(props);

    this.state = {
      contador: 0,
    };
  } */

  state = {             /* FORMA CORTA */
    contador: 0
  }

  sumar = (e) => {
    /* this.contador = this.contador++; NO FUNCIONA*/
    /* this.state.contador = this.state.contador++; NO FUNCIONA*/
    this.setState({
      contador: this.contador++
    });
  }

  restar = (e) => {
    /* this.contador = this.contador--; NO FUNCIONA*/
    /* this.state.contador = this.state.contador--; NO FUNCIONA*/
    this.setState({
      contador: this.contador--
    })
  }

  render() {
    return (
      <section id="content">
        <h2 className="subheader">Pruebas</h2>
        <section className="componentes">
          <h2 className="subheader">Componentes</h2>
          <MiComponente />
          <Peliculas />
          <hr />
        </section>
        <section className="flex">
          <h2 className="subheader">Estado</h2>
          <p>
            <input
              className="btn btn-primary"
              type="button"
              value="+"
              onClick={this.sumar}
            />
          </p>
          <h3>Contador: {this.contador}</h3>
          <p>
            <input
              className="btn btn-primary"
              type="button"
              value="-"
              onClick={this.restar}
            />
          </p>
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
