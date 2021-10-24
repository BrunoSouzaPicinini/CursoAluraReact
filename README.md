# Curso Alura de React

Projeto de estudo relativo ao curso de React

### Pré-requisitos

Instalações necessárias para rodar o projeto
* [Node](https://nodejs.org/en/)

Após instalar o node entre via terminal no diretório raiz do projeto e 
instale as dependências com o comando:
```
npm install
```

Realizar download da API Node utilizada como base
* [API node Alura](https://caelum-online-public.s3.amazonaws.com/1274-react-parte2/04/curso-react-api.zip)

Após efetuar o download entre via terminal no diretório raiz da API e 
instale as dependências com o comando:
```
npm install
```

## Rodar

Comandos para rodar o projeto

Entre via terminal no diretório raiz do projeto e inicialize com o comando:
```
npm start
```
Entre via terminal no diretório raiz da API e inicialize com o comando:
```
npm start
```

## Rodar com Docker

```
docker run -d --name react-api -p 8000:8000 brunosouzapicinini/curso-alura-react-api:1.0.0
docker run -d --name react -p 80:80 brunosouzapicinini/curso-alura-react:0.1.1
```
