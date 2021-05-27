'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Agendamentos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      dataInicio: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dataFim: {
        allowNull: true,
        type: Sequelize.DATE
      },
      frequencia: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Frequencia',
          key: 'id'
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Agendamentos');
  }
};
