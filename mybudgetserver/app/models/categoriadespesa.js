'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoriaDespesa = sequelize.define('CategoriaDespesa', {
    usuario: DataTypes.INTEGER,
    categoria: DataTypes.INTEGER,
    despesa: DataTypes.INTEGER
  }, {});
  CategoriaDespesa.associate = function (models) {
    // associations can be defined here
  };
  return CategoriaDespesa;
};