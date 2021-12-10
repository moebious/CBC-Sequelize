'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      this.hasOne(models.AccountEmployeeClasses, { foreignKey: 'AccountEmployeeClassID'})
    }
  };
  Employee.init({
    EmployeeID: DataTypes.INTEGER,
    SSN: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    JobTitle: DataTypes.STRING,
    LeaveReason: DataTypes.STRING,
    AccountEmployeeClassID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};