import React, {Component} from 'react';
import MiComponente from "../components/MiComponente";
import Peliculas from "../components/Peliculas";

class SeccionPruebas extends Component{
    render(){
        return (
          <section id="content">
          <h2 className="subheader">Ultimos articulos</h2>
            <section className="componentes">
              <MiComponente />
              <Peliculas />
            </section>
          </section>
        );
    }
}

export default SeccionPruebas;