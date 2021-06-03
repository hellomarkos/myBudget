'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING,
    gastoMaximo: DataTypes.DOUBLE
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};