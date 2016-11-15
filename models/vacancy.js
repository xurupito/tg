'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vacancy = sequelize.define('Vacancy', {
    amount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Vacancy.belongsTo(models.Position, {
          foreignKey: {
            fieldName: 'position_id',
            allowNull: false
          }
        });
        Vacancy.belongsTo(models.FederativeUnity, {
          onDelete: "CASCADE",
          foreignKey: {
            fieldName: 'federative_unity_id',
            allowNull: false
          }
        });
        Vacancy.belongsTo(models.Election, {
          foreignKey: {
            fieldName: 'election_id',
            allowNull: false
          }
        });
        Vacancy.belongsTo(models.ElectoralUnity, {
          onDelete: "CASCADE",
          foreignKey: {
            fieldName: 'electoral_unity_id',
            allowNull: false
          }
        });
      }
    },
    tableName: 'vacancies',
    underscored: true
  });
  return Vacancy;
};
