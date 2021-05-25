'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TiposSolicitacoes', [{
      descricao_tipo: "Auxilio criança",
      createdAt: '2019-01-01 00:00:00',
      updatedAt: '2019-01-01 00:00:00'
		}, {
      descricao_tipo: "Material",
      createdAt: '2019-01-01 00:00:00',
      updatedAt: '2019-01-01 00:00:00'
		}, {
      descricao_tipo: "Profissional",
      createdAt: '2019-01-01 00:00:00',
      updatedAt: '2019-01-01 00:00:00'
		} ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
