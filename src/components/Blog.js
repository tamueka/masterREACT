import React, { Component } from "react";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";

class Blog extends Component {
  render() {
    return (
      <div id="home">
        <Slider title="Blog" size="slider-small"/>
        <div id="content">
          <div className="center">
            {/* LISTADO DE ARTICULOS DEL API */}
          </div>
        </div>
        <Sidebar blog="true"/>
      </div>
    );
  }
}

export default Blog;
