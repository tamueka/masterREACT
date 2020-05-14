import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import MiComponente from "./components/MiComponente";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
          {/* CONFIGURAMOS RUTAS Y PAGINAS */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/formulario" component={MiComponente} />
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
          <div className="clearfix"></div>
          <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
