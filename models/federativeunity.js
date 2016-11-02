'use strict';
module.exports = function(sequelize, DataTypes) {
  var FederativeUnity = sequelize.define('FederativeUnity', {
    abbreviation: DataTypes.STRING(2),
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        FederativeUnity.hasMany(models.City);
      }
    },
    tableName: 'federative_unities',
    underscored: true 
  });
  return FederativeUnity;
};