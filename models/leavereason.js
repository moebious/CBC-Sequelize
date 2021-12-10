'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveReason extends Model {

    static associate(models) {
    }
  };
  LeaveReason.init({
    LeaveReasonID: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LeaveReason',
  });
  return LeaveReason;
};