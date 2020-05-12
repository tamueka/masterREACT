import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

//Importar Componentes
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <section className="componentes">
            <MiComponente />
            <Peliculas />
          </section>
        </section>
        <Sidebar />
        <div className="clearfix"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
