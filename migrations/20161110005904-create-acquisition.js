'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('acquisitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_code: {
        type: Sequelize.INTEGER
      },
      type_description: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.TEXT
      },
      value: {
        type: Sequelize.DECIMAL
      },
      date_last_update: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      candidacy_id : {
        type: Sequelize.INTEGER,
        references: 'candidacies',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('acquisitions');
  }
};
