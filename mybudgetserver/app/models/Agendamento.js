'use strict';

module.exports = (sequelize, DataTypes) => {
  const Agendamento = sequelize.define('Agendamento', {
    dataInicio: DateTypes.DATE,
    dataFim: DateTypes.DATE
  }, {
    freezeTableName: true,
    tableName: 'Agendamento'
  });
  Agendamento.associate = function (models) {
    Agendamento.belongsTo(models.Frequencia, {
      foreignKey: 'id'
    });
  };

  return Agendamento;
};