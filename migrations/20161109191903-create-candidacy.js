'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('candidacies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      round_number: {
        type: Sequelize.INTEGER
      },
      candidate_sequential: {
        type: Sequelize.STRING
      },
      candidate_number: {
        type: Sequelize.STRING
      },
      candidate_name: {
        type: Sequelize.STRING
      },
      status_code: {
        type: Sequelize.INTEGER
      },
      status_description: {
        type: Sequelize.STRING
      },
      occupation_code: {
        type: Sequelize.INTEGER
      },
      occupation_description: {
        type: Sequelize.STRING
      },
      age_at_election: {
        type: Sequelize.INTEGER
      },
      schooling_code: {
        type: Sequelize.INTEGER
      },
      schooling_description: {
        type: Sequelize.STRING
      },
      civil_state_code: {
        type: Sequelize.INTEGER
      },
      civil_state_description: {
        type: Sequelize.STRING
      },
      campaign_max_spend: {
        type: Sequelize.DOUBLE
      },
      email: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      candidate_id : {
        type: Sequelize.INTEGER,
        references: 'candidates',
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
      position_id : {
        type: Sequelize.INTEGER,
        references: 'positions',
        referenceKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      party_id : {
        type: Sequelize.INTEGER,
        references: 'parties',
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
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('candidacies');
  }
};
