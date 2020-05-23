import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Global from "../Global";

//Validacion formulario
//Alertas

class CreateArticle extends Component {
  url = Global.url;

  titleRef = React.createRef();
  contentRef = React.createRef();

  state = {
    article: {},
    status: null,
    selectedFile: null,
  };

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
      },
    });
    /*
    console.log(this.state);
    console.log(this.state.article.title);
    console.log(this.state.article.content); 
    */
  };

  saveArticle = (e) => {
    e.preventDefault();

    //Rellenar state con formulario
    this.changeState();

    //Hacer peticion post http para guardar el articulo creado
    axios.post(`${this.url}save/`, this.state.article).then((res) => {
      if (res.data.article) {
        this.setState({
          article: res.data.article,
          status: "waiting",
        });

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
      }
    });
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
          <h1 className="subheader">Crear articulo</h1>
          <form className="mid-form" onSubmit={this.saveArticle}>
            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input
                type="text"
                name="title"
                ref={this.titleRef}
                onChange={this.changeState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                name="content"
                ref={this.contentRef}
                onChange={this.changeState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="file0">Imagen</label>
              <input type="file" name="file0" onChange={this.fileChange} />
            </div>

            <input type="submit" value="Guardar" className="btn"></input>
          </form>
        </section>
      </div>
    );
  }
}

export default CreateArticle;
