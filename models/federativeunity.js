'use strict';
module.exports = function(sequelize, DataTypes) {
  var FederativeUnity = sequelize.define('FederativeUnity', {
    abbreviation: DataTypes.STRING(2),
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        FederativeUnity.hasMany(models.City);
        FederativeUnity.hasMany(models.Candidacy);
        FederativeUnity.hasMany(models.Coalition);
        FederativeUnity.hasMany(models.Acquisition);
      }
    },
    tableName: 'federative_unities',
    underscored: true
  });
  return FederativeUnity;
};
