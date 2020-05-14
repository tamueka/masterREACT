import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queso", "Jamon Cocido"],
      calorias: 400,
    };

    return (
      <div className="mi-componente">
        <h1>{`Receta: ${receta.nombre}`}</h1>
        <h2>{`Calorias: ${receta.calorias}`}</h2>
        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            //console.log(ingrediente, i);
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>
        <hr></hr>
        {this.props.saludo && (
          <React.Fragment>
            <h1>DESDE UNA PROPS:</h1>
            <h3>{this.props.saludo}</h3>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default MiComponente;
