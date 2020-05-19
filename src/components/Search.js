import React, { Component } from "react";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import Articles from "../components/Articles";

class Search extends Component {
  render() {
    var searched = this.props.match.params.search;
    return (
      <div id="search">
        <Slider title={`Busqueda: ${searched}`} size="slider-small" />
        <div className="center">
          <div id="content">
            {/* LISTADO DE ARTICULOS DEL API */}
            <Articles 
            search={searched}
            />
          </div>
        </div>
        <Sidebar blog="true" />
      </div>
    );
  }
}

export default Search;
