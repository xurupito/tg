'use strict';
module.exports = function(sequelize, DataTypes) {
  var Party = sequelize.define('Party', {
    number: DataTypes.INTEGER,
    abbreviation: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Party.hasMany(models.Candidacy);
      }
    },
    tableName: 'parties',
    underscored: true
  });
  return Party;
};
