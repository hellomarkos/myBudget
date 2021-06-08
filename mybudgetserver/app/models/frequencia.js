'use strict';
module.exports = (sequelize, DataTypes) => {
  const Frequencia = sequelize.define('Frequencia', {
    descricao: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Frequencias'
  });
  Frequencia.associate = function (models) {
    Frequencia.belongsTo(models.Agendamento);
  };
  return Frequencia;
};