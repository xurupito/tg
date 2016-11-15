'use strict';

/* pegar argumentos que dizem o tipo do arquivo de entrada e o nome do arquivo */
var yargs = require('yargs');
var argv = yargs.argv;
var candidato = require('./candidato');


var inputFileName = argv.i || argv.input;
var typeOfParse = argv.t || argv.type;
console.log('-------------------- ARGs --------------------');
console.log(argv);
console.log('----------------------------------------------');

switch (typeOfParse) {
  case 'candidato':
    candidato(inputFileName);
    break;
  default:
    console.log('Opção inválida!')

}
