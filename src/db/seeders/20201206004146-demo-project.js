'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var projects = [...require("../../data/projects.json")]
    await queryInterface.bulkInsert('projects', projects, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
