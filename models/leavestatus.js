'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveStatus extends Model {
    static associate(models) {
    }
  };
  LeaveStatus.init({
    LeaveStatusID: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LeaveStatus',
  });
  return LeaveStatus;
};