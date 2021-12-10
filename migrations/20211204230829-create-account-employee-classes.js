'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AccountEmployeeClasses', {
      AccountEmployeeClassID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AccountID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Accounts'
          },
          key: 'AccountID'
        },
        allowNull: false
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
    await queryInterface.addIndex('AccountEmployeeClasses', { fields: ['AccountEmployeeClassID'], unique: true });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AccountEmployeeClasses');
  }
};