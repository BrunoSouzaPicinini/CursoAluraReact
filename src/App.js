import React, {Component, Fragment} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from "./Tabela";
import ContaClicks from "./ContaClicks";
import Formulario from "./Formulario";
import Header from "./Header";
import ButtonSTLD from "./ButtonSTLD";
import PopUp from "./PopUp";
import ApiService from "./ApiService";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            autores: [],
        };
    }

    removeAutor = id => {

        const {autores} = this.state;

        this.setState({
            autores: autores.filter((autor) => {
                return autor.id !== id;
            }),
        });
        PopUp.exibeMensagem("error", "Autor removido com sucesso");
        ApiService.RemoveAutor(id)
    };

    escutadorDeSubmit = autor => {
        ApiService.CriaAutor(JSON.stringify(autor))
            .then(res => res.data)
            .then(autor => {
                this.setState({autores: [...this.state.autores, autor]});
                PopUp.exibeMensagem("success", "Autor adicionado");
            });
    };

    componentDidMount() {
        ApiService.ListaAutores()
            .then(res => {
                this.setState({autores: [...this.state.autores, ...res.data]})
            })
    }

    render() {

        ApiService.ListaAutores()
            .then(res => console.log(res.data));

        return (
            <Fragment>
                <Header/>
                <div className="container mb-10">
                    <Tabela autores={this.state.autores} removeAutor={this.removeAutor}/>
                    <Formulario escutadorDeSubmit={this.escutadorDeSubmit}/>
                </div>
                <ContaClicks/>
                <ButtonSTLD/>
            </Fragment>
        );
    };

}

export default App;
