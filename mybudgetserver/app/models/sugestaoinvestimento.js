'use strict';
module.exports = (sequelize, DataTypes) => {
  const SugestaoInvestimento = sequelize.define('SugestaoInvestimento', {
    descricao: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'SugestaoInvestimentos'
  });
  SugestaoInvestimento.associate = function (models) {
    // associations can be defined here
  };
  return SugestaoInvestimento;
};