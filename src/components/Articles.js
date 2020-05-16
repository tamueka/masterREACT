import React, { Component } from "react";
import axios from "axios";

class Articles extends Component{

    state = {
        articles: {},
        status: null
    }

    componentWillMount(){
        this.getArticles();
    }

    getArticles = () => {
        axios.get("http://localhost:3900/api/articles")
        .then((res) => {
            this.setState({
                articles: res.data.articles,
                status: "success"
            });
            //console.log(this.state)
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <h1>Hola mundo</h1>
        )
    }
}

export default Articles;