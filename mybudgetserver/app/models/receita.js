'use strict';
module.exports = (sequelize, DataTypes) => {
  const Receita = sequelize.define('Receita', {
    descricao: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    data: DataTypes.DATE,
    agendamento: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    tableName: 'Receitas'
  });
  Receita.associate = function (models) {
    Receita.hasMany(models.Agendamento);
    Receita.belongsToMany(models.Categoria, {
      through: models.CategoriaReceita,
      foreignKey: 'categoria'
    });
    Receita.belongsToMany(models.Usuario, {
      through: models.CategoriaReceita,
      foreignKey: 'usuario'
    });
    Receita.belongsToMany(models.Categoria, {
      through: models.CategoriaDespesa,
      foreignKey: 'categoria'
    });
    Receita.belongsToMany(models.Usuario, {
      through: models.CategoriaDespesa,
      foreignKey: 'usuario'
    });
  };
  return Receita;
};