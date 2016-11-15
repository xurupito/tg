'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coalition = sequelize.define('Coalition', {
    round_number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    type: DataTypes.STRING,
    sequential: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Coalition.belongsTo(models.Position, {
          foreignKey: {
            fieldName: 'position_id',
            allowNull: false
          }
        });
        Coalition.belongsTo(models.Election, {
          foreignKey: {
            fieldName: 'election_id',
            allowNull: false
          }
        });
        Coalition.belongsTo(models.FederativeUnity, {
          onDelete: "CASCADE",
          foreignKey: {
            fieldName: 'federative_unity_id',
            allowNull: false
          }
        });
        Coalition.belongsTo(models.ElectoralUnity, {
          onDelete: "CASCADE",
          foreignKey: {
            fieldName: 'electoral_unity_id',
            allowNull: false
          }
        });
      }
    },
    tableName: 'coalitions',
    underscored: true
  });
  return Coalition;
};
