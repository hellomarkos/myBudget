'use strict';
module.exports = (sequelize, DataTypes) => {
  const SugestaoInvestimento = sequelize.define('SugestaoInvestimento', {
    descricao: DataTypes.STRING
  }, {});
  SugestaoInvestimento.associate = function(models) {
    // associations can be defined here
  };
  return SugestaoInvestimento;
};