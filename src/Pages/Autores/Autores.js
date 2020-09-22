import React, {Component, Fragment} from 'react';
import Header from '../../Components/Header/Header';
import ApiService from "../../Utils/ApiService";
import PopUp from "../../Utils/PopUp";
import Tabela from "../../Components/Tabela/Tabela";


class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: []
        };
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => {
                if (res.message === 'success')
                    this.setState({nomes: [...this.state.nomes, ...res.data]})
            })
            .catch(() => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar listar nomes"));
    }

    render() {
        const campos = [{titulo: 'Autor', dado: "nome"}];
        return (
            <Fragment>
                <Header/>
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <Tabela campos={campos} dados={this.state.nomes}/>
                </div>
            </Fragment>
        );
    }
}

export default Autores;