'use strict';
module.exports = function(sequelize, DataTypes) {
  var ElectoralUnity = sequelize.define('ElectoralUnity', {
    ano: DataTypes.STRING,
    descriptionn: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ElectoralUnity.hasMany(models.Coalition);
      }
    },
    tableName: 'electoral_unities',
    underscored: true
  });
  return ElectoralUnity;
};
