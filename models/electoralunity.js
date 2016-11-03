'use strict';
module.exports = function(sequelize, DataTypes) {
  var ElectoralUnity = sequelize.define('ElectoralUnity', {
    ano: DataTypes.STRING,
    descriptionn: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    tableName: 'electoral_unities',
    underscored: true
  });
  return ElectoralUnity;
};
