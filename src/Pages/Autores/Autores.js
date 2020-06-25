import React, {Component, Fragment} from 'react';
import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from "../../Utils/ApiService";
import PopUp from "../../Utils/PopUp";


class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: [
            ],
            titulos: ['Autores']
        };
    }

    componentDidMount(){
        ApiService.ListaNomes()
            .then(res => {
                if(res.message === 'success')
                    this.setState({nomes: [...this.state.nomes, ...res.data]})
            })
            .catch(() => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar listar nomes"));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <DataTable dados={this.state.nomes} titulos={this.state.titulos} colunas={['nome']}/>
                </div>
            </Fragment>
        );
    }
}

export default Autores;