import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";


class Router extends Component {
  render() {
    return (
      <BrowserRouter>
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
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
