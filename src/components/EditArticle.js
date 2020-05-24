import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import SimpleReactValidator from "simple-react-validator";
import swal from "sweetalert";
import logo from "../assets/images/logo.svg";
import imgDefault from "../assets/images/image-holder-icon.png";

//1.Tenemos que recoger el id del articulo a editar de la url
//2.Crear un metodo para sacar ese objeto del backend
//3.Rellenar el formulario con esos datos
//4.Actualizar el objeto haciendo una peticon al backend

class CreateArticle extends Component {
  url = Global.url;

  articleId = null;

  titleRef = React.createRef();
  contentRef = React.createRef();

  state = {
    article: {},
    status: null,
    selectedFile: null,
  };

  componentWillMount() {
    this.articleId = this.props.match.params.id;
    this.getArticle(this.articleId);
    this.validator = new SimpleReactValidator({
      messages: {
        required: "Este campo es requerido",
      },
    });
  }

  getArticle = (id) => {
    axios
      .get(this.url + "article/" + id)
      .then((res) => {
        this.setState({
          article: res.data.article,
        });
      })
      .catch((err) => {
        console.log("No se puede encontrar articulo por ID");
      });
  };

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
        image: this.state.article.image
      },
    });
    //console.log(this.state);
    this.validator.showMessages();
    this.forceUpdate();
  };

  saveArticle = (e) => {
    e.preventDefault();

    //Rellenar state con formulario
    this.changeState();
    //Validacion formulario
    if (this.validator.allValid()) {
      //Hacer peticion post http para guardar el articulo creado
      axios.put(`${this.url}article/${this.articleId}`, this.state.article).then((res) => {
        if (res.data.article) {
          this.setState({
            article: res.data.article,
            status: "waiting",
          });
          swal(
            "Articulo editado",
            "El articulo ha sido editado correctamente",
            "success"
          );
          //Subir imagen
          if (this.selectedFile !== null) {
            //sacar id del articulo guardado
            var articleId = this.state.article._id;

            //crear formdata y añadir fichero
            const formData = new FormData();
            formData.append(
              "file0",
              this.state.selectedFile,
              this.state.selectedFile.name
            );

            //peticion post ajax: http://localhost:3900/api/upload-image/
            axios
              .post(this.url + "upload-image/" + articleId, formData)
              .then((res) => {
                if (res.data.article) {
                  this.setState({
                    article: res.data.article,
                    status: "success",
                  });
                } else {
                  this.setState({
                    article: res.data.article,
                    status: "failed",
                  });
                }
              })
              .catch((err) => console.log(err));
          } else {
            this.setState({
              status: "success",
            });
          }
        } else {
          this.setState({
            status: "failed",
          });
          swal(
            "Articulo no se puede editar",
            "El articulo no ha sido editado correctamente",
            "error"
          );
        }
      });
    } else {
      this.setState({
        status: "failed",
      });
    }
  };

  fileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
    /*     console.log(event.target.files[0]);
    console.log(this.state); */
  };

  render() {
    if (this.state.status === "success") {
      return <Redirect to="/home" />;
    }

    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Editar articulo</h1>
          {this.state.article.title && (
            <form className="mid-form" onSubmit={this.saveArticle}>
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                  defaultValue={this.state.article.title}
                  type="text"
                  name="title"
                  ref={this.titleRef}
                  onChange={this.changeState}
                />
                {this.validator.message(
                  "title",
                  this.state.article.title,
                  "required|alpha_num_space"
                )}
              </div>

              <div className="form-group">
                <label htmlFor="content">Contenido</label>
                <textarea
                  defaultValue={this.state.article.content}
                  name="content"
                  ref={this.contentRef}
                  onChange={this.changeState}
                />
                {this.validator.message(
                  "content",
                  this.state.article.content,
                  "required"
                )}
              </div>

              <div className="form-group">
                <label htmlFor="file0">Imagen</label>
                <div className="image-wrap">
                  {this.state.article.image !== null &&
                  this.state.article.image !== undefined ? (
                    <img
                      src={this.url + "get-image/" + this.state.article.image}
                      alt={this.state.article.title}
                      className="thumb"
                    />
                  ) : (
                    <img
                      src={imgDefault}
                      alt={this.state.article.title}
                      className="thumb"
                    />
                  )}
                </div>
                <input type="file" name="file0" onChange={this.fileChange} />
              </div>

              <input type="submit" value="Guardar" className="btn"></input>
            </form>
          )}
          {!this.state.article.title && (
            <div id="logo">
              <h2 className="subheader">Cargando</h2>
              <img src={logo} className="app-logo" alt="Logotipo" />
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default CreateArticle;
