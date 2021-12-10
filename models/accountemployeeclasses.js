'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountEmployeeClasses extends Model {
    static associate(models) {
      this.belongsTo(models.Account, { foreignKey: 'AccountID'})
    }
  };
  AccountEmployeeClasses.init({
    AccountEmployeeClassID: DataTypes.INTEGER,
    AccountID: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AccountEmployeeClasses',
  });
  return AccountEmployeeClasses;
};