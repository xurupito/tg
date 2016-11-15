# tg

O projeto foi criado seguindo as instruções [desse artigo](http://docs.sequelizejs.com/en/1.7.0/articles/express/) e [desse repositório](https://github.com/sequelize/express-example).

## Getting Started
Só rodar "npm install", copiar o arquivo config/config.example.json para config/config.json e editar as configurações do seu bd nesse arquivo e sucesso.

O comando "npm start" inicia o server e daí é só acessar a url "localhost:3000" no navegador.

## Populando o banco

Para popular o banco, fazemos o parse dos [arquivos disponíveis no TSE](http://www.tse.jus.br/eleicoes/estatisticas/repositorio-de-dados-eleitorais). O parse é feito utilizando o [csv-parse](https://github.com/wdavidw/node-csv-parse/), com documentação disponível [nesse link](http://csv.adaltas.com/parse/).

Para rodar o parse, estando na pasta root do projeto, é só digitar ```node populate <opções>```, onde opções podem ser:

```
-t: tipo do arquivo.
    Opções disponíveis: "candidato".

-i: nome do arquivo de entrada.
```
