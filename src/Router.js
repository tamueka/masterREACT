import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Blog from "./components/Blog";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Formulario from "./components/Formulario";
import Peliculas from "./components/Peliculas";
import Search from "./components/Search";

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
          <Route exact path="/blog/busqueda/:search" component={Search} />
          <Route
            exact
            path="/redirect/:search"
            render={(props) => {
              var search = props.match.params.search;
              return <Redirect to={`/blog/busqueda/${search}`} />;
            }}
          />
          <Route
            exact
            path="/blog/articulo/:id"
            render={() => <h1>Pagina individual</h1>}
          />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />
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
