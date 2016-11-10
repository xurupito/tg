'use strict';
module.exports = function(sequelize, DataTypes) {
  var Election = sequelize.define('Election', {
    ano: DataTypes.STRING,
    descriptionn: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Election.hasMany(models.Candidacy);
          Election.hasMany(models.Coalition);
      }
    },
    tableName: 'elections',
    underscored: true
  });
  return Election;
};
