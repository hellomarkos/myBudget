'use strict';

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Model', {

  }, {
    freezeTableName: true,
    tableName: 'Model' 
  });

  return Model;
};