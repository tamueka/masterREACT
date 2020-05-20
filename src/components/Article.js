import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Articles from "./Articles";
import Sidebar from "./Sidebar";
import logo from "../assets/images/logo.svg";

class Article extends Component {
  url = Global.url;

  state = {
    article: false,
    status: null,
  };

  componentWillMount() {
    this.getArticle();
  }

  getArticle = () => {
    var id = this.props.match.params.id;
    axios
      .get(this.url + "article/" + id)
      .then((res) => {
        this.setState({
          article: res.data.article,
          status: 'success',
        });
      })
      .catch((err) => {
        this.setState({
          article: false,
          status: 'success',
        });
      });
  };

  render() {
    var article = this.state.article;
    return (
      <div className="center">
        <section id="content">
          {this.state.article && (
            <article className="article-item article-detail">
              <div className="image-wrap">
                <img
                  src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                  alt="Paisaje"
                />
              </div>

              <h1 className="subheader">{article.title}</h1>
              <span className="date">Hace 5 minutos</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet consectetur dui. Vestibulum ac convallis urna,
                vitae porta massa. Mauris sit amet nisi in metus tempor
                convallis. Nulla nec euismod turpis. Cras luctus lorem et nisl
                dapibus aliquet. Curabitur lorem nunc, tristique a felis ac,
                vehicula laoreet ante. Ut auctor orci turpis. Cras sit amet
                placerat nulla, feugiat eleifend metus. Mauris nec convallis
                lectus. In gravida sapien in iaculis vulputate. Aliquam a
                rhoncus elit, sit amet pretium nisl. Vivamus egestas facilisis
                viverra. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Ut vel lorem est. Cras et sapien
                finibus, mattis est in, condimentum nisl.
              </p>

              <div className="clearfix"></div>
            </article>
          )}
          {!this.state.article && this.state.status === "success" && (
            <div id="article">
              <h2 className="subheader">El articulo no existe</h2>
              <p>Intentelo de nuevo mas tarde</p>
            </div>
          )}

          {this.state.status == null && (
            <div id="article">
              <h2 className="subheader">Cargando...</h2>
              <div id="logo">
                <img src={logo} className="app-logo" alt="Logotipo" />
              </div>
            </div>
          )}
        </section>
        <div className="clearfix"></div>
        <Sidebar />
      </div>
    );
  }
}

export default Article;
