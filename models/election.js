'use strict';
module.exports = function(sequelize, DataTypes) {
  var Election = sequelize.define('Election', {
    ano: DataTypes.STRING,
    descriptionn: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    tableName: 'elections',
    underscored: true
  });
  return Election;
};
