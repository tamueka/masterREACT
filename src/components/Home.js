import React, { Component } from "react";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import Articles from "../components/Articles";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Slider title="APP React" btn="Ir al Blog" size="slider-big" />
        <div id="content">
          <div className="center">
            <h1 className="subheader">Ultimos articulos</h1>
            <Articles home="true" />
          </div>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Home;
