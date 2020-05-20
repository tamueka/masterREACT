import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Global from "../Global";

//Validacion formulario
//Alertas

class createArticle extends Component {
  render() {
    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Crear articulo</h1>
          <form className="mid-form">
            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input type="text" name="title" />
            </div>

            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea name="content" />
            </div>

            <div className="form-group">
              <label htmlFor="file0">Imagen</label>
              <input type="file" name="file0" />
            </div>

            <input type="submit" value="Guardar" className="btn"></input>
          </form>
        </section>
      </div>
    );
  }
}

export default createArticle;
