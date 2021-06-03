'use strict';
module.exports = (sequelize, DataTypes) => {
  const Frequencia = sequelize.define('Frequencia', {
    descricao: DataTypes.STRING
  }, {});
  Frequencia.associate = function(models) {
    // associations can be defined here
  };
  return Frequencia;
};