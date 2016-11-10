'use strict';
module.exports = function(sequelize, DataTypes) {
  var Position = sequelize.define('Position', {
    code: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Position.hasMany(models.Candidacy);
          Position.hasMany(models.Coalition);
      }
    },
    tableName: 'positions',
    underscored: true
  });
  return Position;
};
