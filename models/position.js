'use strict';
module.exports = function(sequelize, DataTypes) {
  var Position = sequelize.define('Position', {
    code: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  },
  {
    tableName: 'positions',
    underscored: true
  });
  return Position;
};
