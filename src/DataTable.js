import React from 'react';

const DataTable = props => {
    let linhas = props.dados.map( item =>
        <tr key={item.id}>
            {props.colunas.map(coluna => {
                console.log(`${item.id}${item[coluna]}`);
                return <td key={`${item.id}${item[coluna]}`}> {item[coluna]}</td>
                }
            )}
        </tr>
    );
    return (
        <table className='centered highlight'>
            <thead>
                <tr>
                    {props.titulos.map(titulo =>
                        <th>{titulo}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {linhas}
            </tbody>
        </table>
    );
}

export default DataTable;