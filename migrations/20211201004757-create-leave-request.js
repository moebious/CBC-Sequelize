'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LeaveRequests', {
      LeaveRequestID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LeaveTypeID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'LeaveTypes'
          },
          key: 'LeaveTypeID'
        },
        allowNull: false
      },
      LeaveReasonID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'LeaveReasons'
          },
          key: 'LeaveReasonID'
        },
        allowNull: false
      },
      LeaveStatusID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'LeaveStatuses'
          },
          key: 'LeaveStatusID'
        },
        allowNull: false
      },
      WorkRelatedExplain: {
        type: Sequelize.STRING
      },
      ApprovalDate: {
        type: Sequelize.DATE
      },
      LastDayWorked: {
        type: Sequelize.DATE
      },
      LeaveFromDate: {
        type: Sequelize.DATE
      },
      AnticipatedReturnDate: {
        type: Sequelize.DATE
      },
      IsIntermittent: {
        type: Sequelize.BOOLEAN
      },
      IsContinueLeave: {
        type: Sequelize.BOOLEAN
      },
      BenefitsTermed: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.addIndex('LeaveRequests', { fields: ['LeaveRequestID'], unique: true });
    await queryInterface.addIndex('LeaveRequests', { fields: ['LeaveTypeID'] });
    await queryInterface.addIndex('LeaveRequests', { fields: ['LeaveStatusID'] });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LeaveRequests');
  }
};