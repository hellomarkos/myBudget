'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoriaReceita = sequelize.define('CategoriaReceita', {
    usuario: DataTypes.INTEGER,
    categoria: DataTypes.INTEGER,
    receita: DataTypes.INTEGER
  }, {});
  CategoriaReceita.associate = function (models) {
    // associations can be defined here
  };
  return CategoriaReceita;
};