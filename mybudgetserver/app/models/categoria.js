'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    descricao: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Categorias'
  });
  Categoria.associate = function (models) {
    Categoria.belongsToMany(models.Usuario, {
      through: models.CategoriaReceita,
      foreignKey: 'usuario'
    });
    Categoria.belongsToMany(models.Receita, {
      through: models.CategoriaReceita,
      foreignKey: 'receita'
    });
    Categoria.belongsToMany(models.Usuario, {
      through: models.CategoriaDespesa,
      foreignKey: 'usuario'
    });
    Categoria.belongsToMany(models.Receita, {
      through: models.CategoriaDespesa,
      foreignKey: 'receita'
    });
  };
  return Categoria;
};