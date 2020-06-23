const ApiService = {
    ListaAutores: () => {
        return fetch('http://localhost:8000/api/autor')
            .then(res => res.json());
    },

    CriaAutor: autor => {
        return fetch('http://localhost:8000/api/autor', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: autor
        })
            .then(res => res.json());
    },
    ListaNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome')
            .then(res => res.json());
    },
    ListaLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro')
            .then(res => res.json());
    },
    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, {
            method: 'DELETE',
            Headers: {'content-type': 'application/json'}
        })
            .then(res => res.json());
    }

};

export default ApiService;