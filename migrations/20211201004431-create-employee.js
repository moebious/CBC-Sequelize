'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      EmployeeID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SSN: {
        type: Sequelize.STRING
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      JobTitle: {
        type: Sequelize.STRING
      },
      AccountEmployeeClassID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'AccountEmployeeClasses'
          },
          key: 'AccountEmployeeClassID'
        },
        allowNull: false
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
    await queryInterface.addIndex('Employees', { fields: ['EmployeeID'], unique: true });
    await queryInterface.addIndex('Employees', { fields: ['AccountEmployeeClassID'] });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};