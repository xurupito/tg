'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('cities', [{
        code: 'V1D4LOK4',
        name: 'Pinhais',
        federative_unity_id: 1
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      Example:
      return queryInterface.bulkDelete('cities', null, {});
  }
};
