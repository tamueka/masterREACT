import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from "axios";
import Global from '../Global';

//Validacion formulario
//Alertas

class createArticle extends Component{
    render(){
        return(
            <div className="center">
            <section id="content">
            <h1 className="subheader">Crear articulo</h1>
            </section>
            </div>
        )
    }
}

export default createArticle;

