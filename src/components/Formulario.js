import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {

  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  recibirFormulario = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
    console.log(this.nombreRef.current.value);
  }

  render() {
    return (
      <div id="formulario">
        <h1 className="subheader">Formulario</h1>
        <div className="center">
          <section id="content">
            <form className="mid-form" onSubmit={this.recibirFormulario}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef}  />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef} ></textarea>
              </div>

              <div className="form-group radibuttons">
                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/> Hombre
                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}/> Mujer
                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef}/> Otro
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
