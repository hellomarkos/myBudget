'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    email: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    estado_civil: DataTypes.STRING,
    end_numero: DataTypes.INTEGER,
    end_complemento: DataTypes.STRING,
    rua: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Pessoas'
  });
  Pessoa.associate = function(models) {
    Pessoa.hasOne(models.Usuario, {foreignKey: 'id', onDelete: 'cascade'});    
    Pessoa.hasOne(models.PessoaFisica, {foreignKey: 'id', onDelete: 'cascade'});    
    Pessoa.hasOne(models.PessoaJuridica, {foreignKey: 'id', onDelete: 'cascade'});    
  };
  return Pessoa;
};
