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

        const autoresAtualizado = autores.filter(autor => autor.id !== id);

        ApiService.RemoveAutor(id)
            .then(res => ApiService.TrataErros(res))
            .then(res =>  {
                if(res.message === 'deleted'){
                    this.setState({autores : [...autoresAtualizado]});
                    PopUp.exibeMensagem("error", "Autor removido com sucesso");
                }
            })
            .catch(() => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar remover o Autor"));
    };

    escutadorDeSubmit = autor => {
        ApiService.CriaAutor(JSON.stringify(autor))
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                if(res.message === 'success') {
                    this.setState({autores: [...this.state.autores, res.data]});
                    PopUp.exibeMensagem("success", "Autor adicionado com sucesso");
                }
            })
            .catch(() => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar criar o Autor"));
    };

    componentDidMount() {
        ApiService.ListaAutores()
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                if(res.message === 'success')
                    this.setState({autores: [...this.state.autores, ...res.data]})
            })
            .catch(() => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar listar o Autor"));
    }

    render() {

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
