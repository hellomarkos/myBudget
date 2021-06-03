'use strict';
module.exports = (sequelize, DataTypes) => {
  const Despesa = sequelize.define('Despesa', {
    descricao: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    data: DataTypes.DATE
  }, {});
  Despesa.associate = function(models) {
    // associations can be defined here
  };
  return Despesa;
};