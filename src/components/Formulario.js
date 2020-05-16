import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {

  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  state = {
    user: {},
  };

  recibirFormulario = (e) => {
    e.preventDefault();

    let genero = "hombre";

    if (this.generoHombreRef.current.checked) {
      genero = this.generoHombreRef.current.value;
    } else if (this.generoMujerRef.current.checked) {
      genero = this.generoMujerRef.current.value;
    } else {
      genero = this.generoOtroRef.current.value;
    }

    const user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
      user: user,
    });

    console.log("Formulario enviado");
    console.log(user);
  };

  render() {
    return (
      <div id="formulario">
        <h1 className="subheader">Formulario</h1>
        <div className="center">
          {/* MOSTRAMOS DATOS DEL FORMULARIO */}
          {this.state.user.nombre && (
            <div id="user-data">
              <p>Nombre: {this.state.user.nombre}</p>
              <p>Apellidos: {this.state.user.apellidos}</p>
              <p>Biografia: {this.state.user.bio}</p>
              <p>Genero: {this.state.user.genero}</p>
            </div>
          )}
          <section id="content">
            {/* CREAMOS FORMULARIO */}
            <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radibuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.generoHombreRef}
                />{" "}
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  ref={this.generoMujerRef}
                />{" "}
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  ref={this.generoOtroRef}
                />{" "}
                Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn" />
            </form>
          </section>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Formulario;
