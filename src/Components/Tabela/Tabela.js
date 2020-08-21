import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const BotaoDeleta = () => {
    <Button
        variant='contained'
        color='primary'
        onClic  k={() => {removeAutor(dados.id)}}>
        Remover
    </Button>
}
const Tabela = props => {
    const {campos, dados, removeDado} = props;

    return (
        <Table className="centered highlight">
            <TableHead>
                <TableRow>
                    {
                        campos.map(x => (<TableCell>{x.titulo}</TableCell>))
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dados.map(dado => (
                        <TableRow key={dado.id}>
                            {
                                campos.map(campo => (<TableCell>{dado[campo.dado]}</TableCell>))
                            }
                            <TableCell>
                                <Button onClick={() => removeDado(dado.id)} variant="contained"
                                        color="primary">Remover</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
    );
}

export default Tabela;