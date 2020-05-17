import React, { Component } from "react";
import axios from "axios";
import logo from "../assets/images/logo.svg";

class Articles extends Component {
  state = {
    articles: {},
    status: null,
  };

  componentWillMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios
      .get("http://localhost:3900/api/articles")
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
        return (
          <div id="articles">
            <h1>LISTADO DE ARTICULOS</h1>
            <article className="article-item" id="article-template">
              <div className="image-wrap">
                <img
                  src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                  alt="Paisaje"
                />
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
