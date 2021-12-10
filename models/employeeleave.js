'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeLeave extends Model {

    static associate(models) {
      this.belongsTo(models.Employee, { foreignKey: 'EmployeeID' })
      this.belongsTo(models.LeaveRequest, { foreignKey: 'LeaveRequestID' })
    }
  };
  EmployeeLeave.init({
    EmployeeLeaveID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    LeaveRequestID: DataTypes.INTEGER,
    FMLAExhaustedDate: DataTypes.DATE,
    ActualReturnDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'EmployeeLeave',
  });
  return EmployeeLeave;
};