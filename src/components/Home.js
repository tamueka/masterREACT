import React, { Component } from "react";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Slider title="APP React" btn="Ir al Blog" />
        <div id="content">
          <div className="center">
            <h1 className="subheader">Ultimos articulos</h1>
          </div>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Home;
