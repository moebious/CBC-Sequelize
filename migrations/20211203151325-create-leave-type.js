'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LeaveTypes', {
      LeaveTypeID: {
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
    await queryInterface.addIndex('LeaveTypes', { fields: ['LeaveTypeID'], unique: true });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LeaveTypes');
  }
};