'use strict';

var fs = require('fs');
var parse = require('csv-parse');

module.exports = function (inputFileName) {
  console.time('Parse of \"' + inputFileName + '\"');

  var parser = parse({
    delimiter: ';',
    columns: [
      'data_geracao',
      'hora_geracao',
      'ano_eleicao',
      'num_turno',
      'descricao_eleicao',
      'sigla_uf',
      'sigla_ue',
      'descricao_ue',
      'codigo_cargo',
      'descricao_cargo',
      'nome_candidato',
      'sequencial_candidato',
      'numero_candidato',
      'cpf_candidato',
      'nome_urna_candidato',
      'cod_situacao_candidatura',
      'des_situacao_candidatura',
      'numero_partido',
      'sigla_partido',
      'nome_partido',
      'codigo_legenda',
      'sigla_legenda',
      'composicao_legenda',
      'nome_legenda',
      'codigo_ocupacao',
      'descricao_ocupacao',
      'data_nascimento',
      'num_titulo_eleitoral_candidato',
      'idade_data_eleicao',
      'codigo_sexo',
      'descricao_sexo',
      'cod_grau_instrucao',
      'descricao_grau_instrucao',
      'codigo_estado_civil',
      'descricao_estado_civil',
      'codigo_cor_raca',
      'descricao_cor_raca',
      'codigo_nacionalidade',
      'descricao_nacionalidade',
      'sigla_uf_nascimento',
      'codigo_municipio_nascimento',
      'nome_municipio_nascimento',
      'despesa_max_campanha',
      'cod_sit_tot_turno',
      'desc_sit_tot_turno',
      'nm_email'
    ]
  },
  function(err, data){
    console.log(data);
    console.timeEnd('Parse of \"' + inputFileName + '\"');
  });





  fs.createReadStream(inputFileName).pipe(parser);

}
