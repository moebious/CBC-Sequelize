'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveType extends Model {
    static associate(models) {
    }
  };
  LeaveType.init({
    LeaveTypeID: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LeaveType',
  });
  return LeaveType;
};