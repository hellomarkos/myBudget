'use strict';
module.exports = (sequelize, DataTypes) => {
  const Receita = sequelize.define('Receita', {
    descricao: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    data: DataTypes.DATE
  }, {});
  Receita.associate = function(models) {
    // associations can be defined here
  };
  return Receita;
};