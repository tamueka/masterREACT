import React, { Component } from "react";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import Articles from "../components/Articles";

class Blog extends Component {

  render() {
    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small" />
        <div className="center">
          <div id="content">
            {/* LISTADO DE ARTICULOS DEL API */}
            <Articles />
          </div>
        </div>
        <Sidebar blog="true" />
      </div>
    );
  }
}

export default Blog;
