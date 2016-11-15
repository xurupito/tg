'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('federative_unities', [
      {
        abbreviation: 'AC',
        name: 'Acre'
      }, {
        abbreviation: 'AL',
        name: 'Alagoas'
      }, {
        abbreviation: 'AM',
        name: 'Amazonas'
      }, {
        abbreviation: 'AP',
        name: 'Amapá'
      }, {
        abbreviation: 'BA',
        name: 'Bahia'
      }, {
        abbreviation: 'CE',
        name: 'Ceará'
      }, {
        abbreviation: 'DF',
        name: 'Distrito Federal'
      }, {
        abbreviation: 'ES',
        name: 'Espírito Santo'
      }, {
        abbreviation: 'GO',
        name: 'Goiás'
      }, {
        abbreviation: 'MA',
        name: 'Maranhão'
      }, {
        abbreviation: 'MG',
        name: 'Minas Gerais'
      }, {
        abbreviation: 'MS',
        name: 'Mato Grosso do Sul'
      }, {
        abbreviation: 'MT',
        name: 'Mato Grosso'
      }, {
        abbreviation: 'PA',
        name: 'Pará'
      }, {
        abbreviation: 'PB',
        name: 'Paraíba'
      }, {
        abbreviation: 'PE',
        name: 'Pernambuco'
      }, {
        abbreviation: 'PI',
        name: 'Piauí'
      }, {
        abbreviation: 'PR',
        name: 'Paraná'
      }, {
        abbreviation: 'RJ',
        name: 'Rio de Janeiro'
      }, {
        abbreviation: 'RN',
        name: 'Rio Grande do Norte'
      }, {
        abbreviation: 'RO',
        name: 'Rondônia'
      }, {
        abbreviation: 'RR',
        name: 'Roraima'
      }, {
        abbreviation: 'RS',
        name: 'Rio Grande do Sul'
      }, {
        abbreviation: 'SC',
        name: 'Santa Catarina'
      }, {
        abbreviation: 'SE',
        name: 'Sergipe'
      }, {
        abbreviation: 'SP',
        name: 'São Paulo'
      }, {
        abbreviation: 'TO',
        name: 'Tocantins'
      }
    ]
    , {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('federative_unities', null, {});
  }
};
