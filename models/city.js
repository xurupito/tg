'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        City.belongsTo(models.FederativeUnity, {
          onDelete: "CASCADE",
          foreignKey: {
            fieldName: 'federative_unity_id',
            allowNull: false
          }
        });
      }
    },
    tableName: 'cities',
    underscored: true
  });
  return City;
};
