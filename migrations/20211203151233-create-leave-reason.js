'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LeaveReasons', {
      LeaveReasonID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('LeaveReasons', { fields: ['LeaveReasonID'], unique: true });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LeaveReasons');
  }
};