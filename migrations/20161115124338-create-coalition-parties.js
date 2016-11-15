'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('coalition_parties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coalition_id : {
        type: Sequelize.INTEGER,
        references: 'coalitions',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      partie_id : {
        type: Sequelize.INTEGER,
        references: 'parties',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('coalition_parties');
  }
};
