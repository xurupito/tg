'use strict';
module.exports = function(sequelize, DataTypes) {
  var Candidacy = sequelize.define('Candidacy', {
    round_number: DataTypes.INTEGER,
    candidate_sequential: DataTypes.STRING,
    candidate_number: DataTypes.STRING,
    candidate_name: DataTypes.STRING,
    status_code: DataTypes.INTEGER,
    status_description: DataTypes.STRING,
    occupation_code: DataTypes.INTEGER,
    occupation_description: DataTypes.STRING,
    age_at_election: DataTypes.INTEGER,
    schooling_code: DataTypes.INTEGER,
    schooling_description: DataTypes.STRING,
    civil_state_code: DataTypes.INTEGER,
    civil_state_description: DataTypes.STRING,
    campaign_max_spend: DataTypes.DECIMAL,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Candidacy.belongsTo(models.Candidate, {
              onDelete: "CASCADE",
              foreignKey: {
                  fieldName: 'candidate_id',
                  allowNull:false
              }
          });
          Candidacy.belongsTo(models.Election, {
              onDelete: "CASCADE",
              foreignKey: {
                  fieldName: 'election_id',
                  allowNull:false
              }
          });
          Candidacy.belongsTo(models.Position, {
              onDelete: "CASCADE",
              foreignKey: {
                  fieldName: 'position_id',
                  allowNull:false
              }
          });
          Candidacy.belongsTo(models.Party, {
              onDelete: "CASCADE",
              foreignKey: {
                  fieldName: 'party_id',
                  allowNull:false
              }
          });
          Candidacy.belongsTo(models.FederarativeUnity, {
              onDelete: "CASCADE",
              foreignKey: {
                  fieldName: 'federative_unity_id',
                  allowNull:false
              }
          });

          Candidacy.hasMany(models.Acquisition);
      }
    },
    tableName: 'candidacies',
    underscored: true
  });
  return Candidacy;
};
