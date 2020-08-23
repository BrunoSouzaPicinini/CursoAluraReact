import React, {Component, Fragment} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import Tabela from "../../Components/Tabela/Tabela";
import ContaClicks from "../../Utils/ContaClicks";
import Formulario from "../../Components/Formulario/Formulario";
import Header from "../../Components/Header/Header";
import ButtonSTLD from "../../Components/StyledButton/ButtonSTLD";
import PopUp from "../../Utils/PopUp";
import ApiService from "../../Utils/ApiService";

class Home extends Component {

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
            .then(res => {
                if(res.message === 'success')
                    this.setState({autores: [...this.state.autores, ...res.data]})
            })
            .catch(() => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar listar o Autor"));
    }

    render() {
        const campos = [
            { titulo: 'Autore', dado: 'nome'},
            { titulo: 'Livro', dado: 'livro'},
            { titulo: 'Preço', dado: 'preco'}]
        return (
            <Fragment>
                <Header/>
                <div className="container mb-10">
                    <Tabela campos={campos} dados={this.state.autores} removeDados={this.removeAutor}/>
                    <Formulario escutadorDeSubmit={this.escutadorDeSubmit}/>
                </div>
                <ContaClicks/>
                <ButtonSTLD/>
            </Fragment>
        );
    };

}

export default Home;
