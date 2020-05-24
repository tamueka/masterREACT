import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";
import logo from "../assets/images/logo.svg";
import imgDefault from "../assets/images/image-holder-icon.png";
import Moment from "react-moment";
import "moment/locale/es";
import swal from "sweetalert";

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
          status: "success",
        });
      })
      .catch((err) => {
        this.setState({
          article: false,
          status: "success",
        });
      });
  };

  deleteArticle = (id) => {
    swal({
      title: "¿Estas seguro?",
      text: "Una vez eliminado, ¡no podrá recuperar este articulo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(this.url + "article/" + id)
          .then((res) => {
            this.setState({
              article: res.data.article,
              status: "deleted",
            });
          })
          .catch((err) => {
            this.setState({
              article: false,
              status: "failed",
            });
            swal(
              "Articulo no borrado",
              "No es posible borrar el articulo",
              "error"
            );
          });
        swal("Poof! Tu articulo ha sido borrado!", {
          icon: "success",
        });
      } else {
        swal("Tu articulo esta a salvo!");
      }
    });
  };

  render() {
    if (this.state.status === "deleted") {
      return <Redirect to="/home"></Redirect>;
    }
    var article = this.state.article;
    return (
      <div className="center">
        <section id="content">
          {article && (
            <article className="article-item article-detail">
              <div className="image-wrap">
                {article.image !== null && article.image !== undefined ? (
                  <img
                    src={this.url + "get-image/" + article.image}
                    alt={article.title}
                  />
                ) : (
                  <img src={imgDefault} alt={article.title} />
                )}
              </div>

              <h1 className="subheader">{article.title}</h1>
              <span className="date">
                <Moment locale="es" fromNow>
                  {article.date}
                </Moment>
              </span>
              <p>{article.content}</p>

              <button
                onClick={() => {
                  this.deleteArticle(article._id);
                }}
                className="btn btn-danger"
              >
                Eliminar
              </button>
              <Link to="/blog" className="btn btn-warning">
                Editar
              </Link>

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
