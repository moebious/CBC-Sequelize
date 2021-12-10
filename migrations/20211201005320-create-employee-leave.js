'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmployeeLeaves', {
      EmployeeLeaveID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Employees'
          },
          key: 'EmployeeID'
        },
        allowNull: false
      },
      LeaveRequestID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'LeaveRequests'
          },
          key: 'LeaveRequestID'
        },
        allowNull: false
      },
      FMLAExhaustedDate: {
        type: Sequelize.DATE
      },
      ActualReturnDate: {
        type: Sequelize.DATE
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
    await queryInterface.addIndex('EmployeeLeaves', { fields: ['EmployeeLeaveID'], unique: true });
    await queryInterface.addIndex('EmployeeLeaves', { fields: ['EmployeeID'] });
    await queryInterface.addIndex('EmployeeLeaves', { fields: ['LeaveRequestID'] });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EmployeeLeaves');
  }
};