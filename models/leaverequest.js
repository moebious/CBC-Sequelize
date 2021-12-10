'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveRequest extends Model {
    static associate(models) {
      this.belongsTo(models.LeaveType, { foreignKey: 'LeaveTypeID' });
      this.belongsTo(models.LeaveReason, { foreignKey: 'LeaveReasonID' });
      this.belongsTo(models.LeaveStatus, { foreignKey: 'LeaveStatusID' });
    }
  };
  LeaveRequest.init({
    LeaveRequestID: DataTypes.INTEGER,
    LeaveTypeID: DataTypes.INTEGER,
    LeaveReasonID: DataTypes.INTEGER,
    LeaveStatusID: DataTypes.INTEGER,
    WorkRelatedExplain: DataTypes.STRING,
    ApprovalDate: DataTypes.DATE,
    LastDayWorked: DataTypes.DATE,
    LeaveFromDate: DataTypes.DATE,
    AnticipatedReturnDate: DataTypes.DATE,
    IsIntermittent: DataTypes.BOOLEAN,
    IsContinueLeave: DataTypes.BOOLEAN,
    BenefitsTermed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'LeaveRequest',
  });
  return LeaveRequest;
};