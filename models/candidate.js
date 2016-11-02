'use strict';
module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    nationality_code: DataTypes.STRING,
    nationality_description: DataTypes.STRING,
    race_code: DataTypes.STRING,
    race_description: DataTypes.STRING,
    sex_code: DataTypes.CHAR,
    sex_description: DataTypes.STRING,
    voter_number: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    cpf: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Candidate.belongsTo(models.City, {
            onDelete: "CASCADE",
            foreignKey: {
                fieldName: 'birth_city_id',
                allowNull:false
            }
        });
      }
    },
    tableName: 'candidates',
    underscore: true
  });
  return Candidate;
};
