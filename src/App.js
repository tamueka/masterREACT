import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

//Importar Componentes
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
    <Header />
    <Slider />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className="componentes">
          <MiComponente />
          <Peliculas />
        </section>
      </header>
    </div>
  );
}

export default App;
