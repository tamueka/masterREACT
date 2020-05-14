import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class Router extends Component {
  render() {
    var buttonString = "Ir al blog";
    return (
        <BrowserRouter>
          <Header />
          <Slider title="APP React" btn={buttonString} />
          <div className="center"></div>

          {/* CONFIGURAMOS RUTAS Y PAGINAS */}
          <Switch>
            <Route exact path="/" component={Peliculas} />
            <Route exact path="/ruta-prueba" component={SeccionPruebas} />
            <Route exact path="/segunda-ruta" component={MiComponente} />
            <Route
              exact
              path="/pagina-1"
              render={() => (
                <React.Fragment>
                  <h1>Hola mundo desde la ruta: PAGINA 1</h1>
                  <MiComponente saludo="Hola amigo" />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/pruebas/:nombre/:apellidos?"
              render={(props) => {
                var nombre = props.match.params.nombre;
                var apellidos = props.match.params.apellidos;

                return (
                  <div id="content">
                    <h1>Pagina pruebas</h1>
                    {nombre && !apellidos && (
                      <React.Fragment>{nombre}</React.Fragment>
                    )}
                    {nombre && apellidos && (
                      <React.Fragment>
                        {nombre} {apellidos}
                      </React.Fragment>
                    )}
                  </div>
                );
              }}
            />
            <Route component={Error} />
          </Switch>

          <Sidebar />
          <div className="clearfix"></div>
          <Footer />
        </BrowserRouter>
    );
  }
}

export default Router;
