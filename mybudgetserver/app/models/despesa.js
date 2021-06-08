'use strict';
module.exports = (sequelize, DataTypes) => {
  const Despesa = sequelize.define('Despesa', {
    descricao: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    data: DataTypes.DATE,
    agendamento: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    tableName: 'Despesas'
  });
  Despesa.associate = function (models) {
    Despesa.hasMany(models.Agendamento);
  };
  return Despesa;
};