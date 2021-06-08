'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agendamento = sequelize.define('Agendamento', {
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    frequencia: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    tableName: 'Agendamentos'
  });
  Agendamento.associate = function (models) {
    Agendamento.hasMany(models.Frequencia);
    Agendamento.belongsTo(models.Receita);
    Agendamento.belongsTo(models.Despesa);
  };
  return Agendamento;
};