import React, { Component } from "react";
import axios from "axios";
import logo from "../assets/images/logo.svg";
import Global from "../Global";
import imgDefault from "../assets/images/image-holder-icon.png";

class Articles extends Component {

  url = Global.url;

  state = {
    articles: {},
    status: null,
  };

  componentWillMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios
      .get(`${this.url}articles`)
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          status: "success",
        });
        //console.log(this.state)
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.articles.length >= 1) {
      var listArticles = this.state.articles.map((article) => {
        console.log(article)
        return (
          <div id="articles">
            <h1>LISTADO DE ARTICULOS</h1>
            <article className="article-item" id="article-template">
              <div className="image-wrap">
                {article.image !== null && article.image !== undefined ? (
                  <img
                    src={this.url + "get-image/" + article.image}
                    alt={article.title}
                  />
                ) : (
                  <img src={imgDefault} className="app-logo" alt="Logotipo" />
                )}
              </div>

              <h2>{article.title}</h2>
              <span className="date">{article.date}</span>
              <a href="#">Leer más</a>

              <div className="clearfix"></div>
            </article>
          </div>
        );
      });
      return <div id="articles">{listArticles}</div>
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h2 className="subheader">No hay articulos para mostrar</h2>
          <p>Todavia no hay contenido en esta seccion</p>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h2 className="subheader">Cargando articulos</h2>
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
          </div>
        </div>
      );
    }
  }
}

export default Articles;
