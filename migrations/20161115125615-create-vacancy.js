'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      position_id : {
        type: Sequelize.INTEGER,
        references: 'positions',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      federative_unity_id : {
        type: Sequelize.INTEGER,
        references: 'federative_unities',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      election_id : {
        type: Sequelize.INTEGER,
        references: 'elections',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      electoral_unity_id : {
        type: Sequelize.INTEGER,
        references: 'electoral_unities',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Vacancies');
  }
};
