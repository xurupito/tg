'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Coalitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      round_number: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      abbreviation: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      sequential: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      position_id: {
        type: Sequelize.INTEGER,
        references: 'positions',
        referenceKey: 'id'
      },
      election_id: {
        type: Sequelize.INTEGER,
        references: 'elections',
        referenceKey: 'id'
      },
      federative_unity_id: {
        type: Sequelize.INTEGER,
        references: 'federative_unities',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      electoral_unity_id: {
        type: Sequelize.INTEGER,
        references: 'electoral_unities',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Coalitions');
  }
};
