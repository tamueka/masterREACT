import React, { Component } from "react";
import axios from "axios";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";

class Blog extends Component {
  state = {
    articles: {},
    status: null,
  };

  render() {
    axios
      .get("http://localhost:3900/api/articles")
      .then((res) => {
        //console.log(res.data)
        this.setState({
          articles: res.data.articles,
          status: 'success'
        });
      })
      .catch((err) => console.log(err))

    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small" />
        <div className="center">
          <div id="content">
            {/* LISTADO DE ARTICULOS DEL API */}
            {this.state.status === "success" && (
              <div>
                {this.state.articles.map((article) => {
                  return (
                    <h1 key={article._id}>{article.title}</h1>
                    )
                })}
              </div>
            )}
          </div>
        </div>
        <Sidebar blog="true" />
      </div>
    );
  }
}

export default Blog;
