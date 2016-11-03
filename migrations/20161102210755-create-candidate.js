'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      nationality_code: {
        type: Sequelize.STRING
      },
      nationality_description: {
        type: Sequelize.STRING
      },
      race_code: {
        type: Sequelize.STRING
      },
      race_description: {
        type: Sequelize.STRING
      },
      sex_code: {
        type: Sequelize.CHAR
      },
      sex_description: {
        type: Sequelize.STRING
      },
      voter_number: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      cpf: {
        type: Sequelize.STRING
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      },
      birth_city_id : {
        type: Sequelize.INTEGER,
        references: 'federative_unities',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('candidates');
  }
};
