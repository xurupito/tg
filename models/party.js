'use strict';
module.exports = function(sequelize, DataTypes) {
  var Party = sequelize.define('Party', {
    number: DataTypes.INTEGER,
    abbreviation: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  },
  {
    tableName: 'parties',
    underscored: true
  });
  return Party;
};
