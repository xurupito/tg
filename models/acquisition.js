'use strict';
module.exports = function(sequelize, DataTypes) {
  var Acquisition = sequelize.define('Acquisition', {
    type_code: DataTypes.INTEGER,
    type_description: DataTypes.STRING,
    detail: DataTypes.TEXT,
    value: DataTypes.DECIMAL,
    date_last_update: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Acquisition.belongsTo(models.Candidacy, {
          onDelete: "CASCADE",
          foreignKey: {
            fieldName: 'federative_unity_id',
            allowNull: false
          }
        });
        Acquisition.belongsTo(models.FederativeUnity, {
          onDelete: "CASCADE",
          foreignKey: {
            fieldName: 'federative_unity_id',
            allowNull: false
          }
        });
      }
    },
    tableName: 'acquisitions',
    underscored: true
  });
  return Acquisition;
};
