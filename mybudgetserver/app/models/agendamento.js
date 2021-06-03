'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agendamento = sequelize.define('Agendamento', {
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE
  }, {});
  Agendamento.associate = function(models) {
    // associations can be defined here
  };
  return Agendamento;
};