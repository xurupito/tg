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
          Party.belongsToMany(models.Coalition, {as: 'Coalitions', through: 'coalition_parties', foreignKey: 'party_id', otherKey: 'coalition_id'});
      }
    },
    tableName: 'parties',
    underscored: true
  });
  return Party;
};
