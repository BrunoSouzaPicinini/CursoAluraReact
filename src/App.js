import React, {Component} from 'react';

import './App.css';
import Tabela from "./Tabela";
import ContaClicks from "./ContaClicks";

class App extends Component {

    state = {
        autores: [
            {
                nome: 'Paulo',
                livro: 'React',
                preco: '1000'
            },
            {
                nome: 'Daniel',
                livro: 'Java',
                preco: '99'
            },
            {
                nome: 'Marcos',
                livro: 'Design',
                preco: '150'
            },
            {
                nome: 'Bruno',
                livro: 'DevOps',
                preco: '100'
            }
        ],
    };

    removeAutor = index => {

        const {autores} = this.state;

        this.setState({
            autores: autores.filter((autor, posAtual) => {
                return posAtual !== index;
            })
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <Tabela autores={this.state.autores} removeAutor={this.removeAutor}/>
                <ContaClicks></ContaClicks>
            </div>
        );
    };

}

export default App;
