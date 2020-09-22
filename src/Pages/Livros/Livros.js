import React, {Component, Fragment} from 'react';
import Header from '../../Components/Header/Header';
import ApiService from "../../Utils/ApiService";
import PopUp from "../../Utils/PopUp";
import Tabela from "../../Components/Tabela/Tabela";


class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: []

        };
    }

    componentDidMount() {
        ApiService.ListaLivros()
            .then(res => {
                if (res.message === 'success')
                    this.setState({livros: [...this.state.livros, ...res.data]})
            })
            .catch(() => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar listar livros"));
    }

    render() {
        const campos = [{titulo: "Livros", dado: 'livro'}];
        return (
            <Fragment>
                <Header/>
                <div className='container'>
                    <h1>Página de Livros</h1>
                    <Tabela campos={campos} dados={this.state.livros}/>
                </div>
            </Fragment>
        );
    }
}

export default Livros;