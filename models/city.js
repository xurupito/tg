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
        City.hasMany(models.Candidate);
      }
    },
    tableName: 'cities',
    underscored: true
  });
  return City;
};
