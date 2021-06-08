'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.DOUBLE,
    token: DataTypes.DATE,
    gastoMaximo: DataTypes.DOUBLE
  }, {
    freezeTableName: true,
    tableName: 'Usuarios'
  });
  Usuario.associate = function (models) {
    Usuario.belongsToMany(models.Categoria, {
      through: models.CategoriaReceita,
      foreignKey: 'categoria'
    });
    Usuario.belongsToMany(models.Receita, {
      through: models.CategoriaReceita,
      foreignKey: 'receita'
    });
    Usuario.belongsToMany(models.Categoria, {
      through: models.CategoriaDespesa,
      foreignKey: 'categoria'
    });
    Usuario.belongsToMany(models.Receita, {
      through: models.CategoriaDespesa,
      foreignKey: 'receita'
    });
  };
  return Usuario;
};